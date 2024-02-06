import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio';
import {format, parseISO} from 'date-fns';
import trLocale from 'date-fns/locale/tr';
import FollowArtistCard from '../components/EventDetailScreen/FollowArtistCard';
import dayjs from 'dayjs';
import 'dayjs/locale/tr'; // Türkçe dil dosyasını içe aktar
import ToggleContent from '../components/ToggleContent';
import Icon from 'react-native-ionicons'




const ArtistScreen = () => {
  const [eventDetails, setEventDetails] = useState(null);
  const [eventImageURL, setEventImageURL] = useState(null);
  

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const API_BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
        const API_KEY = '	eDrWd2HCOgSP6nDQPpbvBqX6SfC5Lkfe';
        const eventId = 'Z6HyzZyMZGATbAZv';

        const response = await fetch(
          `${API_BASE_URL}events/${eventId}?apikey=${API_KEY}&locale=tr`,
        );

        if (response.ok) {
          const data = await response.json();
          setEventDetails(data);
        } else {
          console.error('Hata oluştu:', response.statusText);
        }
      } catch (error) {
        console.error('Bir hata oluştu:', error);
      }
    };

    const fetchEventImageURL = async () => {
      try {
        // eventDetails kontrolü eklenerek fetchEventImageURL içindeki işlemler sadece eventDetails varsa gerçekleştirilecek
        if (eventDetails) {
          const response = await axios.get(eventDetails?.url);

          if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);

            const imgTags = $('img');
            imgTags.each((index, element) => {
              const src = $(element).attr('src');
              if (
                src &&
                src.includes(
                  'https://www.biletix.com/static/images/live/event/eventimages',
                )
              ) {
                setEventImageURL(src);
                return false;
              }
            });
          } else {
            console.error('Resim URL alınamadı.');
          }
        }
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    

    fetchEventDetails();
    fetchEventImageURL();
    
  }, [eventDetails]);

  return (
    <ScrollView>
      <View style={styles.eventDetailContainer}>
        {eventDetails ? (
          <View style={styles.details}>
            {eventImageURL ? (
              <Image source={{uri: eventImageURL}} style={styles.eventCover} />
            ) : (
              <Text>Resim yükleniyor...</Text>
            )}

            

           

            
            <Text style={styles.title}>
              {eventDetails.name} 
            </Text>
            
            <Text style={styles.venue}>Hakkında </Text>

            <Text style={{padding:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium libero et tellus tincidunt, in molestie eros pretium. Cras finibus feugiat velit. Vivamus turpis leo, iaculis sit amet convallis mattis, pretium ac justo. Aliquam ac cursus magna, in elementum turpis. Nullam ac purus gravida, tempor enim id, convallis quam. Etiam vulputate eu nisi quis porta. Morbi diam arcu, fermentum ac massa vitae, finibus tempus lacus. Nulla in augue nec tellus viverra pharetra et sit amet quam. Nam eu tincidunt dui. In tempus tellus eget fringilla posuere. Pellentesque maximus maximus facilisis. Suspendisse potenti. Nam ultricies tellus leo, quis dictum nunc gravida tempus.</Text>
            
          
           
           

            {/* <Text>Segment</Text>
          <Text>Genre</Text> */}
            
            

            <Text></Text>
          </View>
        ) : (
          <Text style={styles.venue}>Detaylar yükleniyor...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventDetailContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAF9F6',
  },

  details: {
    flex: 1,
    marginHorizontal: 5,
  },

  eventCover: {
    
    width: '100%',
    height: '40%',
    alignSelf: 'center',
    objectFit: 'fill',
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 20,
  },

  dateTime: {},

  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
  },

  venue: {
    padding: 10,
    fontSize: 20,
  },

  aboutInfo: {
    padding: 10,
  },

  dateInfo: {},

  timeInfo: {},
});

export default ArtistScreen;
