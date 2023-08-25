import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Keyboard,
  Animated,
  StatusBar,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  Center,
  Heading,
  Link,
  Button,
  Pressable,
  NativeBaseProvider,
  Box,
  Text,
  Input,
  Icon,
  FormControl,
} from "native-base";
import TextInput from "../../components/TextInput";
import { ShortTextInput,Btn } from "../../components/TextInput";

const Book = ({navigation}) => {
  const [customer_name, setCustomerName] = useState("");
  const [customer_phone_number, setCustomerPhone] = useState("");
  const [customer_email, setCustomerEmail] = useState("");

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Box flex={1}>
          <Center
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            h={70}
            backgroundColor={"#05A2D3"}
          >
            <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
              <Ionicons
                name="md-chevron-back-sharp"
                size={30}
                color={"white"}
              />
            </TouchableOpacity>
            <Heading fontFamily="Poppins-Bold" size="lg" color={"white"}>
              Booking Form
            </Heading>

            <Text></Text>
          </Center>

          <View
            style={{
              //   alignContent: "center",
              //   alignSelf: "center",
              marginLeft: 5,
              marginTop: 15,
            }}
          >
            <Heading>POSTINGS AND TRANSFERS</Heading>

            <Box flexDirection={"column"}>
              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Reference no.</Text>
                  <Box h={39} width={150} bgColor={"#F3F3F3"}></Box>
                </Box>
                <Box>
                  <Text>Customer Name</Text>

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}
                  <ShortTextInput/>
                </Box>
              </Box>

              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Reference no.</Text>
                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}
                  <ShortTextInput/>

                </Box>
                <Box>
                  <Text>Customer Name</Text>

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}
                
                  <ShortTextInput/>

                </Box>
              </Box>


              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Reference no.</Text>
                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}
                
                  <ShortTextInput/>

                </Box>
                <Box>
                  <Text>Customer Name</Text>

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}
                
                  <ShortTextInput/>

                </Box>
              </Box>

              <Center >
                  <Text>Officer signature</Text>

                  <Box h={100} width={'90%'} bgColor={"#F3F3F3"}></Box>
                </Center>

                <Center mt={5}><Btn onPress={()=>{navigation.navigate('BookedCard')}} text="BOOK FILE"  /></Center>

            </Box>
          </View>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Book;
