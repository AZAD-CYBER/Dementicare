import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Graph = () => {
  return (
    <View style={{ borderWidth: 2, borderColor: "white", margin: 5 }}>
      <Text>Recent Actitvity</Text>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "sat"],
          datasets: [
            {
              data: [20, 40, 60, 50, 80, 100],
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 154, 117, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 154, 117, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        // bezier
        style={{
          marginVertical: 8,
        }}
      />
    </View>
  );
};

export default Graph;
