import React from "react";
import { Text, View } from "react-native";

import { TimeDP } from "utils/TimeDP";

const time1 = new TimeDP(new Date());

const time2 = new TimeDP({ hours: 12, minutes: 30, seconds: 30 });

export const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text style={{ fontWeight: "bold" }}>Lab3</Text>
      </View>

      <View>
        <Text style={{ marginTop: 10 }}>time1: {time1.toString()}</Text>
        <Text>time2: {time2.toString()}</Text>

        <Text style={{ marginTop: 10 }}>Add time: {time1.addTime(time2).toString()}</Text>
        <Text>Substract time: {time1.substractTime(time2).toString()}</Text>

        <Text style={{ marginTop: 10 }}>Static add time: {TimeDP.addTimeObjects(time1, time2).toString()}</Text>
        <Text>Static substract time: {TimeDP.substractTimeObjects(time1, time2).toString()}</Text>
      </View>
    </View>
  );
};
