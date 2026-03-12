import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FlatList, Text, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { getCommentsByVideoId } from '../api/commentApi';
import { ShortCommentType } from '../types';

interface Props {
  videoId: string | null;
}

export const CommentsSheet = forwardRef<BottomSheet, Props>(
  ({ videoId }, ref) => {
    const snapPoints = useMemo(() => ['30%', '50%'], []);
    const [comments, setComments] = useState<ShortCommentType[]>([]);

    useEffect(() => {
      const loadComments = async () => {
        if (!videoId) {
          setComments([]);
          return;
        }

        const data = await getCommentsByVideoId(videoId);
        setComments(data);
      };

      loadComments();
    }, [videoId]);

    const renderItem = useCallback(
      ({ item }: { item: ShortCommentType }) => (
        <View
          style={{
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          }}
        >
          <Text style={{ fontWeight: '700', color: '#111' }}>@{item.user}</Text>
          <Text style={{ color: '#222', marginTop: 4 }}>{item.text}</Text>
        </View>
      ),
      [],
    );

    return (
      <BottomSheet ref={ref} index={-1} snapPoints={snapPoints}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              marginBottom: 12,
              color: '#111',
            }}
          >
            Comments
          </Text>

          <FlatList
            data={comments}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </BottomSheet>
    );
  },
);

CommentsSheet.displayName = 'CommentsSheet';
