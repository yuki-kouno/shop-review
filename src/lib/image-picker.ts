import * as ImagePicker from "expo-image-picker";
import Contstants from "expo-constants";

const getCameraRollPermission = async () => {
  if (Contstants.platform?.ios) {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("画像を選択するためにはカメラロールの許可が必要です");
    }
  }
};

export const pickImage = async () => {
  await getCameraRollPermission();
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
  });
  if (!result.cancelled) {
    return result.uri;
  }
};
