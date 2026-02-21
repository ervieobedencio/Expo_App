import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.hero}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTitle}>
            Hello, I'm <Text style={styles.highlight}>Ervie</Text>
          </Text>
          <Text style={styles.heroSubtitle}>BSIT 3RD YEAR</Text>
          
          <View style={styles.taglineContainer}>
            <Text style={styles.tagline}>
              ⚡ aspiring developer · frontend punk · clean & playful ⚡
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/about')}
          >
            <Text style={styles.buttonText}>About Me ✦</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/profile.jpg')}
            style={styles.profileImage}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f2ff",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  hero: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 72,
    padding: 30,
    borderWidth: 4,
    borderColor: "#000",
    shadowColor: "#f5d300",
    shadowOffset: { width: 16, height: 16 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
    alignItems: "center",
    gap: 30,
  },
  heroTextContainer: {
    alignItems: "center",
    width: "100%",
  },
  heroTitle: {
    fontWeight: "800",
    fontSize: 42,
    textAlign: "center",
    color: "#0026ff",
  },
  highlight: {
    backgroundColor: "#ffb86b",
    color: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 40,
    overflow: "hidden",
  },
  heroSubtitle: {
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    marginTop: 8,
  },
  taglineContainer: {
    backgroundColor: "#e5ffc7",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#000",
    marginVertical: 20,
    shadowColor: "#aaff00",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  tagline: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    color: "#1a1a1a",
  },
  button: {
    backgroundColor: "#ffd966",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#000",
    shadowColor: "#00bbff",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 24,
    color: "#000",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 280,
    height: 280,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#000",
    shadowColor: "#fa00b6",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 15,
  },
});