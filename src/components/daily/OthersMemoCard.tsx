import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';
import OthersMemoCardStyle from '~/styles/components/daily/OthersMemoCardStyle';
import BaseStyle from '~/styles/BaseStyle';

export type OthersMemoItemType = {
    id: number,
    content: string,
    likes: number,
    user: any,
    created_at: string,
    do_i_like: boolean,
};

export type OthersMemoPropsType = {
    index: number,
    othersMemo: OthersMemoItemType,
    likeOthersMemo: Function,
};

const OthersMemoCard: React.FC<OthersMemoPropsType> = ({ index, othersMemo, likeOthersMemo }) => {
  return <View 
        key={index}
        style={OthersMemoCardStyle.wrapper}
        >
    <Text style={OthersMemoCardStyle.content}>
        {othersMemo.content}
    </Text>

    <View style={OthersMemoCardStyle.nickname_wrapper}>
        <Text style={OthersMemoCardStyle.nickname}>
            {othersMemo.user.nick_name}
        </Text>
    </View>

    <View style={OthersMemoCardStyle.likes_button}>
        <TouchableOpacity
            style={BaseStyle.flexDirection_Row}
            onPress={ (e:any) =>
                {likeOthersMemo(othersMemo)}
            }
            >
            { othersMemo.do_i_like
            ?
            <Image style={OthersMemoCardStyle.image} source={require('~/resource/like_active.png')}/>
            :
            <Image style={OthersMemoCardStyle.image} source={require('~/resource/like.png')}/>
            }
            <Text style={OthersMemoCardStyle.likes}>
                {othersMemo.likes}
            </Text>
        </TouchableOpacity>
    </View>
</View>
}

export default OthersMemoCard;

