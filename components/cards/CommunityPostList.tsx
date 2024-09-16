import { FlatList, View } from 'react-native';
import CommunityPostItem from '@components/cards/CommunityPostItem';

interface CommunityPostItemProps {
  id: string;
  readStatus: boolean;
  communityName: string;
  postTime: string;
  postBody: string;
}

interface CommunityPostListProps {
  dataArr: CommunityPostItemProps[];
}

export default function CommunityPostList({ dataArr }: CommunityPostListProps) {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 0.5,
            width: 312,
            alignSelf: 'flex-end',
            backgroundColor: '#3C3C435C',
          }}
        />
      )}
      data={dataArr}
      renderItem={({ item }) => (
        <CommunityPostItem
          readStatus={item.readStatus}
          communityName={item.communityName}
          postTime={item.postTime}
          postBody={item.postBody}
        />
      )}
    />
  );
}
