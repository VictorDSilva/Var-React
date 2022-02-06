import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tipCard:{
        padding: 10, 
        width: '40%', 
        marginLeft: '7%', 
        marginTop: '10%'
        //borderRadios: 20
    },
    tipList:{ 
        display: "flex", 
        flexDirection:"row", 
        flexWrap:'wrap', 
        zIndex:0 
    },
    configCard:{
        padding: 10, 
        width: '86%', 
        marginLeft: '7%', 
        marginTop: '4%', 
        //borderRadios: 20
    },
    configList:{ 
        display: "flex", 
        width: "100%",
        zIndex:0 
    },
    tipModal:{ 
        padding: 10,
        zIndex: 2,
        width: 'auto',
        height: '50%'
    },
    safeArea:
    {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10
    },
    searchbar: {
        borderRadius: 20,
        width: "80%"
    },
    loading: {
        flexDirection: "column",
        marginTop: "60%"
    },
    loadingText: {
        textAlign: "center",
        color: "#B24BF3"
    },
    searchButton: {
        textAlignVertical: "center",
        alignItems: "center",
        fontSize: 30,
        marginLeft: 20
    },
    sectionTitle: {
        fontSize: 18,
        marginTop: 0
    },
    sectionTitleTip: {
        fontSize: 18,
        marginTop: 2,
        textAlign: 'center'
    },
    sectionTextTip: {
        fontSize: 15,
        marginTop: 3,
        marginBottom: 3,
        textAlign: 'center'
    },
    container: {
        flex: 1,
    },
    card: {
        paddingTop: 10,
        margin: 10,
        marginTop: 0,   
        borderRadius: 20
    },
    content: {
        padding: 0,
        marginBottom: 5
    },
    cardAction:{
        padding: 0,
        marginBottom: 5,
        alignItems: "flex-end",
    },
    link: {
        color: "#B24BF3",
        alignItems: "flex-end",
    },
    linkTip: {
        color: "#B24BF3",
        alignItems: "center",
    },
});

export default styles;