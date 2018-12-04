import {StyleSheet} from 'react-native';
export default StylesJS = StyleSheet.create({
    main: { flex: 1, padding: 30, flexDirection: 'column', backgroundColor: '#f1efeb'},

    header:{ marginBottom: 20, fontSize: 25, textAlign: 'center', color: '#bd3853'},

    searchInput: { height: 50, padding: 4, marginRight: 5, fontSize: 23, borderWidth: 1, borderColor: '#000843', borderRadius: 8, color: '#000843'},

    
    
    villageHeader: { fontSize: 18, fontWeight: 'bold', alignSelf: 'center'},
    
    resourcesListView: { alignItems: 'center', flexDirection: 'row', flex: 1, justifyContent:'space-evenly', color: '#0b1d1c'},

    mainFlatList: { flex: 1,},

    buttonListView: {marginRight: 5},
    
    buttonText: { fontSize: 18, color: '#f1efeb', alignSelf: 'center'},
    
    button: { height: 45, flexDirection: 'row', backgroundColor:'#6897bb', borderColor: '#000843', borderWidth: 1, borderRadius: 8, marginBottom: 10, marginTop: 10,                     alignSelf: 'stretch', justifyContent: 'center'},
});