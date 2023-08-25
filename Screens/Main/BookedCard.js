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
import { ShortTextInput, Btn } from "../../components/TextInput";

const BookedCard = ({navigation}) => {
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
            <TouchableOpacity onPress={()=>{navigation.navigate('Book')}}>
              <Ionicons
                name="md-chevron-back-sharp"
                size={30}
                color={"white"}
              />
            </TouchableOpacity>
            <Heading fontFamily="Poppins-Bold" size="lg" color={"white"}>
              File Details & Status
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
            <Heading>Finance and Administration Sub-Committee </Heading>

            <Box flexDirection={"column"}>
              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Reference no.</Text>
                  <Text fontFamily="Poppins-Bold">FA002345</Text>
                </Box>
                <Box>
                  <Text>Folio Number</Text>

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}
                  <Text fontFamily="Poppins-Bold">154</Text>
                </Box>
              </Box>

              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Name of Officer</Text>
                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}

                  <Text fontFamily="Poppins-Bold">Fidel Owusu Asare</Text>
                </Box>
                <Box>
                  <Text>Location(Dept/Unit)</Text>

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}

                  <Text fontFamily="Poppins-Bold">Administration</Text>
                </Box>
              </Box>

              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Booked Date</Text>
                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}

                  <Text fontFamily="Poppins-Bold">9/12/2001</Text>
                </Box>
                <Box>
                  <Text>Return Date</Text>

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}

                  <Text fontFamily="Poppins-Bold">9/07/2023</Text>
                </Box>
              </Box>


              <Box flexDirection={"row"} justifyContent={"space-between"} p={5}>
                <Box>
                  <Text>Status of File</Text>
                  <Box h={39} width={150} bgColor={"#F3F3F3"}><Text textAlign={'center'}>BOOKED</Text></Box>

                </Box>
                <Box>
                  <Text>{''}</Text>
                  

                  {/* <Box h={39} width={150} bgColor={"#F3F3F3"}></Box> */}

                  <Text fontFamily="Poppins-Bold"> Tap on status to{`\n`} retun file</Text>
                </Box>
              </Box>

              <Center>
                <Text>Officer signature</Text>

                <Box h={100} width={"90%"} bgColor={"#F3F3F3"}></Box>
              </Center>

             
            </Box>
          </View>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default BookedCard;
