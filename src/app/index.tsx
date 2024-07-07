import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
  return <Redirect href={"/(tabs)"} />;
};

export default Home;

const styles = StyleSheet.create({});
