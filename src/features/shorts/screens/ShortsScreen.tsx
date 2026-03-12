import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Dimensions, ViewToken } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ShortItem } from '../components/ShortItem';
import { CommentsSheet } from '../components';
import { useShortsStore } from '../stores/shortStore';

const { height } = Dimensions.get('window');

export default function ShortsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const videos = useShortsStore(s => s.videos);
  const loadMore = useShortsStore(s => s.loadMore);

  const commentsSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };

  const onViewableItemsChanged = useRef<
    ({ viewableItems }: { viewableItems: ViewToken[] }) => void
  >(({ viewableItems }) => {
    const firstItem = viewableItems[0];

    if (firstItem?.index != null) {
      setActiveIndex(firstItem.index);
    }
  });

  const handleOpenComments = (videoId: string) => {
    setSelectedVideoId(videoId);
    commentsSheetRef.current?.snapToIndex(1);
  };

  return (
    <>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <ShortItem
            item={item}
            isActive={index === activeIndex}
            onPressComments={handleOpenComments}
          />
        )}
        keyExtractor={(item, index) => item.id + '_' + index}
        pagingEnabled
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={3}
        windowSize={5}
        maxToRenderPerBatch={3}
      />

      <CommentsSheet ref={commentsSheetRef} videoId={selectedVideoId} />
    </>
  );
}
