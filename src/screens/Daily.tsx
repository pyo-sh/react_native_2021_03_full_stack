import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Toggle from '~/components/library/Toggle';

import DailyStyle from '~/styles/screens/DailyStyle';
import BaseStyle from '~/styles/BaseStyle';

const Daily = () => {
    return <View>
        <ScrollView
            style={BaseStyle.backgroundColor_Primary}
            //showsVerticalScrollIndicator ={false}
            //showsHorizontalScrollIndicator={false}
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
                    {/*question.content*/}
                </Text>

                <View style={DailyStyle.daily_Item_Empty}></View>
                {<>
                {/* memo ? */}
                <View style={BaseStyle.position_Relative}>
                    <Text style={{fontSize:20, fontFamily:"Cochin"}}>
                        {/* {memo.content} */}
                    </Text>
                </View>
                {/* //: */}
                <TextInput
                    multiline
                    style={{borderWidth:0, borderColor:'transparent', padding:16, height:200,}}
                    placeholder="Enter text (2,200 characters limit)"
                    //onChangeText={(value) => setContent(value)}
                    //value={content}
                    />
                </>}
                {
                // /* !memo && */
                <View style={DailyStyle.daily_Item_Bottom}>
                    <View style={DailyStyle.daily_Item_Bottom}>
                        <Toggle
                            //onToggle={(val) => {onChange(val)}}
                            //isActive={isPublic}
                        />
                        <Text style={DailyStyle.daily_Bottom_Toggle_Text}>
                            is public
                        </Text>
                    </View>
                    <TouchableOpacity
                        //onPress={submit}
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
                {/* <FlatList
                    style={BaseStyle.marginTop_32}
                    ref={flatListRef}
                    horizontal={true}
                    data={othersMemos}
                    renderItem={renderOthersMemoCard}
                    onEndReached={() => {
                        if(othersMemos.length > 0){
                        console.log('on_end_reached');
                        }
                    }}
                    onEndReachedThreshold={0.1}
                    keyExtractor={item => item.id}
                    /> */}
                {/*
                ListHeaderComponent={<View style={{backgroundColor:'red',}}><Text>Header Component</Text></View>}
                ListFooterComponent={<View><Text>Footer Component</Text></View>}
                */}
            </View>
        </ScrollView>
  </View>
}

export default Daily;