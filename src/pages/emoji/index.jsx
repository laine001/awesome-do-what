import Taro from "@tarojs/taro";
import { View, Picker, Image } from "@tarojs/components";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import { emojiPath } from "../../assets/emoji-path";
import "./index.scss";

const urlPrefixJsdelivr = "https://cdn.jsdelivr.net/gh/laine001/cdn";

const urlPrefixNetlify = "https://laine-static.netlify.app";

const getEmojiList = (cdnType = "netlify") => {
  return emojiPath.map((el) => {
    // console.log(`../..${el.data}`);
    const url = cdnType === "jsdelivr" ? urlPrefixJsdelivr : urlPrefixNetlify;
    return {
      title: el.source,
      data: el.data.map((item) => {
        return `${url}${item}`;
      }),
    };
  });
};

const pickerList = [emojiPath.map((el) => el.source), ["jsdelivr", "netlify"]];
console.log(pickerList, "pickerList");

export default () => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [cdnIndex, setCdnIndex] = useState(1);
  const onPickerChange = (e) => {
    const [sourceIndex, cdnIndex] = e.detail.value;
    setSourceIndex(sourceIndex);
    setCdnIndex(cdnIndex);
  };
  useEffect(() => {
    const cdn = pickerList[1][cdnIndex];
    console.log("cdn", cdn);
  }, [cdnIndex]);
  const showEmojiList = useMemo(() => {
    const sourceKey = pickerList[0][sourceIndex];
    const cdnType = pickerList[1][cdnIndex];
    const list = getEmojiList(cdnType);
    console.log(list, "list");
    const data = list.find((el) => el.title === sourceKey).data;
    return data;
  }, [sourceIndex, cdnIndex]);
  const onPreviewImage = (item, index) => {
    console.log("onPreviewImage", index);
    Taro.previewImage({
      current: item,
      urls: showEmojiList,
      showmenu: true,
    });
  };
  return (
    <View className="emoji-page">
      <View className="emoji-list" onClick="play">
        {showEmojiList.map((item, index) => {
          if (index < 50) {
            return (
              <Image
                mode="widthFix"
                show-menu-by-longpress
                className="img"
                src={item}
                onClick={() => onPreviewImage(item, index)}
              />
            );
          } else {
            return null;
          }
        })}
      </View>
      <View className="emoji-source-selector">
        <Picker
          mode="multiSelector"
          onchange={onPickerChange}
          // value={pickerValue}
          range={pickerList}
        >
          <View class="picker">
            {pickerList[0][sourceIndex]}
            {pickerList[1][cdnIndex]}
          </View>
        </Picker>
      </View>
    </View>
  );
};
