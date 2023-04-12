import { View, Text, StyleSheet } from 'react-native'
import React,{ useState, useEffect } from'react';
import AnalogClock from '../AnalogClock';

export default function WarsawScreen() {
    const TIME_ZONE = 'Europe/Warsaw'
    const getTime = () => {
        return new Date(new Date().toLocaleString('pl-PL', {timeZone: TIME_ZONE}));
    }
    const getDate = () => {
        return new Date().toLocaleString('pl-PL', { timeZone: TIME_ZONE, dateStyle: 'long', timeStyle:'medium'})
    }
    const [date, setDate] = useState(getDate());
    const [time,setTime] = useState(getTime())

    useEffect(()=>{
    const intervalId = setInterval(()=>{
        setTime(getTime())
        setDate(getDate())
    },500);
        return () => clearInterval(intervalId);
        },[]
    );
    
    return(
    <View style={styles.container}>
        <Text style={styles.header}>Czas w Warszawie</Text>
        <AnalogClock date={time}/>
        <Text style={styles.date}>{date}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
      fontSize:'32px',
      fontWeight:'800',
    },
    container: {
      alignItems:'center',
      gap:'20px',
    },
    date: {
        fontSize:'20px',
    }
  })