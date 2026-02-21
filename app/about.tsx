import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.aboutContainer}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <Image 
            source={require('../assets/images/profile.jpg')}
            style={styles.profileImageLarge}
          />
          
          <View style={styles.personalInfo}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>👤</Text>
              <Text style={styles.infoLabel}>Name:</Text>
              <Text style={styles.infoValue}>Ervie Jr. A. Obedencio</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🎂</Text>
              <Text style={styles.infoLabel}>Age:</Text>
              <Text style={styles.infoValue}>20 years old</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📍</Text>
              <Text style={styles.infoLabel}>Location:</Text>
              <Text style={styles.infoValue}>Philippines</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🎓</Text>
              <Text style={styles.infoLabel}>Education:</Text>
              <Text style={styles.infoValue}>BSIT 3rd Year</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📧</Text>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>obedencioervie@gmail.com</Text>
            </View>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.sectionTitle}>
            About <Text style={styles.highlight}>Me</Text>
          </Text>

          {/* Introduction Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>👤</Text> Introduction
            </Text>
            <Text style={styles.cardText}>
              Hi, I'm Ervie — a 20-year-old aspiring developer based in the Philippines. 
              My computer obsession started at 12, and now I'm all about front-end with 
              a playful, functional twist.
            </Text>
            <Text style={styles.cardText}>
              When not coding: gaming, making weird designs, and learning new stuff.
            </Text>
          </View>

          {/* Skills Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>💻</Text> Technical Skills
            </Text>
            
            <SkillBar skill="HTML/CSS" percentage={90} />
            <SkillBar skill="JavaScript" percentage={80} />
            <SkillBar skill="UI/UX" percentage={85} />
            <SkillBar skill="Frontend" percentage={75} />
            <SkillBar skill="Responsive" percentage={88} />
          </View>

          {/* Hobbies Grid */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>❤️</Text> Hobbies & Interests
            </Text>
            
            <View style={styles.hobbiesGrid}>
              <View style={styles.hobbyItem}>
                <Text style={styles.hobbyIcon}>💻</Text>
                <Text style={styles.hobbyText}>Coding</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Text style={styles.hobbyIcon}>🎮</Text>
                <Text style={styles.hobbyText}>Gaming</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Text style={styles.hobbyIcon}>🎨</Text>
                <Text style={styles.hobbyText}>Design</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Text style={styles.hobbyIcon}>🎵</Text>
                <Text style={styles.hobbyText}>Music</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Text style={styles.hobbyIcon}>📚</Text>
                <Text style={styles.hobbyText}>Reading</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Text style={styles.hobbyIcon}>📷</Text>
                <Text style={styles.hobbyText}>Photo</Text>
              </View>
            </View>
          </View>

          {/* Education Timeline */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>🎓</Text> Education Background
            </Text>
            
            <View style={styles.timelineItem}>
              <View style={styles.timelineYear}>
                <Text style={styles.timelineYearText}>2022 - Present</Text>
              </View>
              <Text style={styles.timelineTitle}>BSIT</Text>
              <Text style={styles.timelineDescription}>3rd year, web dev & UI focus.</Text>
            </View>
            
            <View style={styles.timelineItem}>
              <View style={styles.timelineYear}>
                <Text style={styles.timelineYearText}>2020 - 2022</Text>
              </View>
              <Text style={styles.timelineTitle}>SHS - ICT</Text>
              <Text style={styles.timelineDescription}>programming fundamentals, hardware.</Text>
            </View>
            
            <View style={styles.timelineItem}>
              <View style={styles.timelineYear}>
                <Text style={styles.timelineYearText}>2016 - 2020</Text>
              </View>
              <Text style={styles.timelineTitle}>JHS</Text>
              <Text style={styles.timelineDescription}>tech club, first lines of code.</Text>
            </View>
          </View>

          {/* Tools */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>🛠️</Text> Tools
            </Text>
            
            <View style={styles.simpleList}>
              {["VS Code", "Git/GitHub", "Figma", "Photoshop", "DevTools", "CLI"].map((item, index) => (
                <Text key={index} style={styles.simpleListItem}>✓ {item}</Text>
              ))}
            </View>
          </View>

          {/* Soft Skills */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>⭐</Text> Soft Skills
            </Text>
            
            <View style={styles.simpleList}>
              {["Problem Solving", "Teamwork", "Communication", "Adaptability", "Creativity", "Hustle"].map((item, index) => (
                <Text key={index} style={styles.simpleListItem}>✓ {item}</Text>
              ))}
            </View>
          </View>

          {/* Future Goals */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              <Text style={styles.icon}>🎯</Text> Future Goals
            </Text>
            <Text style={styles.cardText}>
              I wanna become a full stack developer someday and create apps that are fun and make a difference. So I'm constantly learning new technologies and improving my skills.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Helper Component
const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <View style={styles.skillContainer}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{skill}</Text>
      <Text style={styles.skillPercent}>{percentage}%</Text>
    </View>
    <View style={styles.skillBarBackground}>
      <View style={[styles.skillBarFill, { width: `${percentage}%` }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f2ff",
  },
  aboutContainer: {
    padding: 16,
    gap: 20,
  },
  leftColumn: {
    backgroundColor: "#fffbdd",
    padding: 20,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#000",
    shadowColor: "#21ffb3",
    shadowOffset: { width: 14, height: 14 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  profileImageLarge: {
    width: "100%",
    height: 320,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#000",
    marginBottom: 20,
    shadowColor: "#ffb347",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  personalInfo: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#000",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#aaa",
    borderStyle: "dashed",
    gap: 12,
  },
  infoIcon: {
    fontSize: 24,
    width: 36,
  },
  infoLabel: {
    fontWeight: "700",
    fontSize: 16,
  },
  infoValue: {
    fontWeight: "400",
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
  },
  rightColumn: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: "800",
    fontSize: 48,
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: "#baefff",
    shadowColor: "#f4ff52",
    shadowOffset: { width: 12, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    marginBottom: 20,
    textAlign: "center",
    overflow: "hidden",
  },
  highlight: {
    color: "#ffb347",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 48,
    padding: 20,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#000",
    shadowColor: "#b300ff",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  cardTitle: {
    fontWeight: "800",
    fontSize: 24,
    borderBottomWidth: 4,
    borderBottomColor: "#000",
    borderStyle: "dotted",
    paddingBottom: 8,
    marginBottom: 16,
  },
  icon: {
    fontSize: 28,
  },
  cardText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  skillContainer: {
    marginBottom: 16,
  },
  skillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  skillName: {
    fontWeight: "500",
    fontSize: 16,
  },
  skillPercent: {
    fontWeight: "700",
    fontSize: 16,
  },
  skillBarBackground: {
    height: 16,
    backgroundColor: "#ffe0a3",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    overflow: "hidden",
  },
  skillBarFill: {
    height: "100%",
    backgroundColor: "#ff5e9a",
    borderRadius: 20,
  },
  hobbiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  hobbyItem: {
    backgroundColor: "#cbadff",
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 100,
    padding: 12,
    minWidth: 100,
    alignItems: "center",
    shadowColor: "#0011ff",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  hobbyIcon: {
    fontSize: 32,
  },
  hobbyText: {
    fontWeight: "700",
    fontSize: 14,
    marginTop: 4,
  },
  timelineItem: {
    borderLeftWidth: 6,
    borderLeftColor: "#ff5e00",
    paddingLeft: 20,
    marginBottom: 20,
  },
  timelineYear: {
    backgroundColor: "#000",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#ffea00",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  timelineYearText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  timelineTitle: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 4,
  },
  timelineDescription: {
    fontWeight: "400",
    fontSize: 14,
  },
  simpleList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  simpleListItem: {
    fontWeight: "500",
    fontSize: 16,
    backgroundColor: "#fffbdd",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
});