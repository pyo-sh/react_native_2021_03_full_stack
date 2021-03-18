import React, { useState, useEffect, useRef } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Toggle from '~/components/library/Toggle';
import OthersMemoCard , { OthersMemoItemType } from '~/components/daily/OthersMemoCard';

import DailyStyle from '~/styles/screens/DailyStyle';
import BaseStyle from '~/styles/BaseStyle';

export type MemoType = {
    content: string,
    likes: number,
    created_at?: string,
}

export type QuestionType = {
    id: number | null,
    title: string,
    content: string,
}

const Daily: React.FC = () => {
    const [question, setQuestion] = useState<QuestionType>({
        id: null,
        title: "",
        content: "",
    });
    const [memo, setMemo] = useState<MemoType|null>(null);
    const [othersMemos, setOthersMemos] = useState<OthersMemoItemType[]>([{
        id: 0,
        content: "123",
        likes: 2,
        user: "hi",
        created_at: "19970609",
        do_i_like: false,
    }]);

    const [content, setContent] = useState<string>("");
    const [isPublic, setIsPublic] = useState<boolean>(true);
    const flatListRef = useRef(null);

    useEffect(() => {
        
    },[]);

    const submitMemo = () => {
        let requestMemo: any = {
            content: content,
            likes: 0,
        };

        setMemo(requestMemo);

        requestMemo = {
            ...requestMemo,
            question_id: question.id,
            is_public: isPublic,
        };

        // APIS
    }

    const likeOtherMemo = (memo: OthersMemoItemType) => {
        const memoIndex = othersMemos.findIndex(
            (othersMemo:OthersMemoItemType) => othersMemo.id === memo.id
        );
        const likedMemo = {
            ...othersMemos[memoIndex],
            do_i_like: !memo.do_i_like,
            likes: memo.likes + (memo.do_i_like ? -1 : 1)
        };

        // APIS

        setOthersMemos((prevState) => {
            const returnMemos = [...prevState];
            returnMemos[memoIndex] = likedMemo;
            return returnMemos;
        });
    }

    return <View>
        <ScrollView
            style={BaseStyle.backgroundColor_Primary}
            showsVerticalScrollIndicator ={false}
            showsHorizontalScrollIndicator={false}
            >
            <View style={BaseStyle.marginTop_80}></View>
            <View style={[
                BaseStyle.paddingLeft_20,
                BaseStyle.paddingRight_20,
                ]}
                >
                <Text style={DailyStyle.daily_Title}>
                    Today’s Thought
                </Text>
                <Text style={DailyStyle.daily_Subtitle}>
                    hey
                    {/* -{userBasicInfo.nick_name}-, */}
                    email:
                    {/* {userBasicInfo.email}-, */}
                    {"\n"}
                    share your thought of the day
                </Text>
            </View>
            <View style={DailyStyle.daily_Items}>
                <Text style={DailyStyle.daily_Item_Date}>
                    Jan 21,2021
                </Text>
                <Text style={DailyStyle.daily_Item_Title}>
                    Advice
                </Text>
                <Text style={DailyStyle.daily_Item_Content}>
                    { question.content }
                </Text>

                <View style={DailyStyle.daily_Item_Empty}></View>
                {memo
                ?
                <View style={BaseStyle.position_Relative}>
                    <Text style={{fontSize:20, fontFamily:"Cochin"}}>
                        {memo.content}
                    </Text>
                </View>
                :
                <TextInput
                    multiline
                    style={{borderWidth:0, borderColor:'transparent', padding:16, height:200,}}
                    placeholder="Enter text (2,200 characters limit)"
                    onChangeText={( value: string ) => setContent(value)}
                    value={content}
                    />
                }
                {!memo &&
                <View style={DailyStyle.daily_Item_Bottom}>
                    <View style={DailyStyle.daily_Item_Bottom}>
                        <Toggle
                            onToggle={( value: boolean ) => setIsPublic(value)}
                            isActive={isPublic}
                        />
                        <Text style={DailyStyle.daily_Bottom_Toggle_Text}>
                            is public
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={submitMemo}
                        style={DailyStyle.daily_Bottom_Button}
                        >
                        <Text style={DailyStyle.daily_Bottom_Button_Text}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
                }
            </View>
            {/*
            <View className="flex fdr mt20">
                <Button 
                className="btnConLGray f1"
                onPress={() => {flatListRef.current.scrollToEnd()}}>
                <Text>go back</Text>
                </Button>

                <Button
                className="btnConLGray f1"
                onPress={() => {flatListRef.current.scrollToOffset(0)}}>
                <Text>go top</Text>
                </Button>
            </View>
            */}
            <View style={BaseStyle.marginTop_50}></View>

            <View style={BaseStyle.padding_20}>
                <Text style={DailyStyle.other_Item_Title}>
                    Other Thoughts
                </Text>
                <Text style={DailyStyle.other_Item_Content}>
                    See others’ thoughts on the question
                </Text>
                <FlatList
                    style={BaseStyle.marginTop_32}
                    ref={flatListRef}
                    horizontal={true}
                    data={ othersMemos }
                    renderItem={({ item }) => {
                        return <OthersMemoCard
                            index={item.id}
                            othersMemo={item}
                            likeOthersMemo={likeOtherMemo}
                            />
                    }}
                    // onEndReached={() => {
                    //     // if(othersMemos.length > 0){
                    //     //     console.log('on_end_reached');
                    //     // }
                    // }}
                    onEndReachedThreshold={0.1}
                    keyExtractor={item => item.id.toString()}
                    />
                {/*
                ListHeaderComponent={<View style={{backgroundColor:'red',}}><Text>Header Component</Text></View>}
                ListFooterComponent={<View><Text>Footer Component</Text></View>}
                */}
            </View>
        </ScrollView>
  </View>
}

export default Daily;