import {
  Animated,
  FlatList,
  Image,
  ListView,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
// eslint-disable-next-line max-len

const viewStyleProps = Object.keys(View.propTypes.style)
const textStyleProps = Object.keys(Text.propTypes.style)

const viewStyleComponents = [
  Animated.Image,
  Animated.View,
  FlatList,
  Image,
  ListView,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
]

const textStyleComponents = [
  Animated.Text,
  Text,
  TextInput,
]

export default function isStyleProp(element, propName) {
  if (textStyleComponents.indexOf(element) > -1) {
    return textStyleProps.indexOf(propName) > -1
  }

  if (viewStyleComponents.indexOf(element) > -1) {
    return viewStyleProps.indexOf(propName) > -1
  }

  return false
}
