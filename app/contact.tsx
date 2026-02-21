import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        // Validation
        if (!name || !email || !message) {
            Alert.alert("Error", "Please fill in all required fields (Name, Email, and Message)");
            return;
        }

        // Here you would typically send this to an API
        console.log("Form submitted", { name, email, mobile, subject, message });
        
        // Show success message
        Alert.alert(
            "Message Sent! 🎉", 
            "Thank you for contacting me. I'll get back to you soon!",
            [{ text: "OK" }]
        );
        
        // Clear form
        setName("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {/* Background decoration */}
            <View style={styles.backgroundDecoration}>
                <View style={[styles.decorCircle, styles.circle1]} />
                <View style={[styles.decorCircle, styles.circle2]} />
                <View style={[styles.decorCircle, styles.circle3]} />
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Contact <Text style={styles.highlight}>Me</Text>
                </Text>
                <Text style={styles.headerSubtitle}>
                    Let's work together! Drop me a message.
                </Text>
            </View>

            <View style={styles.formCard}>
                <View style={styles.form}>
                    {/* Name and Email Row */}
                    <View style={styles.row}>
                        <View style={[styles.inputContainer, styles.halfInput]}>
                            <Text style={styles.inputLabel}>Full Name <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ervie Obedencio"
                                placeholderTextColor="#999"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        
                        <View style={[styles.inputContainer, styles.halfInput]}>
                            <Text style={styles.inputLabel}>Email <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                placeholder="juan@example.com"
                                placeholderTextColor="#999"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>

                    {/* Mobile and Subject Row */}
                    <View style={styles.row}>
                        <View style={[styles.inputContainer, styles.halfInput]}>
                            <Text style={styles.inputLabel}>Mobile Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="+63 923 345 6789"
                                placeholderTextColor="#999"
                                keyboardType="phone-pad"
                                value={mobile}
                                onChangeText={setMobile}
                            />
                        </View>
                        
                        <View style={[styles.inputContainer, styles.halfInput]}>
                            <Text style={styles.inputLabel}>Subject</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Simple App"
                                placeholderTextColor="#999"
                                value={subject}
                                onChangeText={setSubject}
                            />
                        </View>
                    </View>

                    {/* Message Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Message <Text style={styles.required}>*</Text></Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tell me about your project..."
                            placeholderTextColor="#999"
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                            value={message}
                            onChangeText={setMessage}
                        />
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={handleSubmit}
                        activeOpacity={0.8}
                    >
                        <LinearGradient
                            colors={['#ff44b0', '#7c3aed']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Send Message ✦</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* Alternative Contact Info */}
                    <View style={styles.alternativeContact}>
                        <Text style={styles.alternativeText}>Or reach me directly:</Text>
                        <View style={styles.contactInfo}>
                            <Text style={styles.contactItem}>📧 obedencioervie@gmail.com</Text>
                            <Text style={styles.contactItem}>📱 +63 912 345 6789</Text>
                            <Text style={styles.contactItem}>🐙 github.com/ervie</Text>
                        </View>
                    </View>
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
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    backgroundDecoration: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    decorCircle: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 150,
        opacity: 0.3,
    },
    circle1: {
        backgroundColor: '#ff90e8',
        top: -100,
        right: -100,
    },
    circle2: {
        backgroundColor: '#7c3aed',
        bottom: -50,
        left: -50,
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    circle3: {
        backgroundColor: '#ffb347',
        top: '50%',
        right: -30,
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    headerContainer: {
        marginBottom: 30,
        zIndex: 1,
    },
    headerTitle: {
        fontSize: 52,
        fontWeight: "800",
        color: "#1b1b2c",
        marginBottom: 10,
        textAlign: "center",
    },
    highlight: {
        color: "#ff44b0",
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#000',
        overflow: 'hidden',
    },
    headerSubtitle: {
        fontSize: 18,
        color: "#4a4a5e",
        textAlign: "center",
        fontWeight: "500",
    },
    formCard: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#000",
        padding: 30,
        shadowColor: "#ff44b0",
        shadowOffset: { width: 16, height: 16 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        elevation: 15,
        zIndex: 1,
    },
    form: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 15,
    },
    inputContainer: {
        marginBottom: 20,
        flex: 1,
    },
    halfInput: {
        minWidth: 200,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1b1b2c",
        marginBottom: 8,
    },
    required: {
        color: "#ff44b0",
        fontSize: 16,
    },
    input: {
        padding: 15,
        fontSize: 16,
        color: "#1b1b2c",
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#000",
        shadowColor: "#ff90e8",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        elevation: 4,
    },
    textArea: {
        height: 150,
        textAlignVertical: 'top',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'center',
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#000",
        shadowColor: "#f5d300",
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "800",
        textAlign: "center",
    },
    alternativeContact: {
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 4,
        borderTopColor: "#ff90e8",
        borderStyle: "dashed",
    },
    alternativeText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1b1b2c",
        marginBottom: 15,
        textAlign: "center",
    },
    contactInfo: {
        gap: 12,
    },
    contactItem: {
        fontSize: 18,
        fontWeight: "500",
        color: "#4a4a5e",
        textAlign: "center",
        backgroundColor: "#f0e9ff",
        padding: 12,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#000",
    },
});