import React, {useState} from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { langType } from '~/Common';

import DropDownInputStyle from '~/styles/components/library/DropDownInputStyle';
import BaseStyle from '~/styles/BaseStyle';

const DropDownInput = ({label, list, renderKey, onSelectClick, valueInit, txtInit}:any) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const toggleDropDownInput = () => {
    setShowOptions(prev => !prev)
  }

  const renderText = () => {
    const index = list.findIndex((lang: langType) => lang.value === valueInit)
    if(index !== -1){
      return list[index].txt
    }
    else{
      return ""
    }
  }

  return <View style={BaseStyle.marginBottom_16}>
    <Text style={[
        BaseStyle.fontSize_14,
        BaseStyle.fontWeight_bold,
    ]}>
        {label}
    </Text>
    <View>
      <TouchableOpacity onPress={toggleDropDownInput}>
        <View style={DropDownInputStyle.click_button}>
          {
            valueInit ?
            <Text style={[
                BaseStyle.fontSize_12,
                BaseStyle.color_Black,
            ]}>
                {renderText()}
            </Text>
            :
            <Text style={[
                BaseStyle.fontSize_12,
                BaseStyle.color_DarkGray,
            ]}>
                {txtInit}
            </Text>
          }
        </View>
      </TouchableOpacity>
      {
        (showOptions === true) ?
        <View style={DropDownInputStyle.items}>
          {list.map((object:any, index: number) => {
            return <View key={index}>
                <SelectItem
                    txt={object.txt}
                    value={object.value}
                    onPress={() => {
                        onSelectClick(renderKey, object.value)
                        toggleDropDownInput();
                    }}/>
            </View>
          })}
        </View>
        :
        <></>
      }
    </View>
  </View>
}

const SelectItem = ({onPress, index, txt, value}:any) => {
    return <TouchableOpacity
        key={index}
        onPress={onPress}
        style={DropDownInputStyle.item_Select}
        >
        <Text style={[
            BaseStyle.color_DarkGray,
            BaseStyle.fontSize_12,
        ]}>
            {txt}
        </Text>
    </TouchableOpacity>
}

export default DropDownInput
