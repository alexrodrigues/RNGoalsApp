import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ]);
    cancelAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
    cancelAddGoalHandler();
  }

  function startAddGoalHandler() {
    setIsAddMode(true);
  }

  function cancelAddGoalHandler() {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />,
      <Button
        title="Add New Goal"
        color="#b180f0"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  text: {
    margin: 16,
  },
  goalsContainer: {
    width: "100%",
    flex: 4,
  },
});
