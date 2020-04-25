import data from '../content/web-content.json';
export interface ISideMenuItem {
  'english-name': string;
  'english-heading'?: string;
  'english-sub-heading'?: string;
  expand?: boolean;
  'external-url'?: string;
  selected?: boolean;
  children?: ISideMenuItem[];
  'videos-list'?: IVideo[];
}
export interface IVideo {
  'video-url': string;
  english: string;
  hindi: string;
  urdu: string;
}
export const sideMenuDetails: ISideMenuItem[] = data.categories;

/*

Paste this in the console of link page to get data in above format
caption = document.getElementsByClassName('caption')[0];
heading = caption.children[0].innerText;
text = caption.children[1].firstElementChild.innerText;
grid = document.getElementById('grid');
list = grid.children;
ytlist = Array.from(list).map(div => div.lastElementChild);
videosList = ytlist.map(item => {
    url = item.getElementsByTagName('iframe')[0].src;
    urduText = item.getElementsByTagName('p')[0].innerText;
hindiText = item.getElementsByTagName('p')[1].innerText;
englishText = item.getElementsByTagName('p')[2].innerText;
    return {url, urduText, hindiText,englishText};
});
data = {heading, text,videosList }
copy(data);
*/
/*
interface ISideMenuItem {
  name: string;
  urduHeading?: string;
  hindiHeading?: string;
  expand?: boolean;
  url?: string;
  selected?: boolean;
  children?: ISideMenuItem[];
  content?: IContentData;
}
interface IContentData {
  heading: string;
  text?: string;
  videosList?: {
    englishText: string;
    hindiText: string;
    urduText: string;
    url: string;
  }[];
}

const sideMenuDetails: ISideMenuItem[] = [
  {
    name: 'Topics',
    children: [
      {
        name: 'Social Issues',
        children: [
          {
            name: 'Cleanliness',
            content: {
              heading: 'Cleanliness In Muslim Society',
              text:
                'Throwing garbage and spitting on roads. Dirty Masjid Toilet. Clean house but dirty society.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/lue4Em1AKfY',
                  urduText: 'بچے کچرے کو سڑک پر نہ پھینکنا سکھاتے ہیں',
                  hindiText: 'सड़क पर कचरा नहीं फेंकना सिखा रहे बच्चे',
                  englishText: 'Kids teaching not to throw garbage on road',
                },
                {
                  url: 'https://youtube.com/embed/LLWxZymPBYo',
                  urduText:
                    'اگر آپ جانتے ہیں کہ قیامت کل آنے والی ہے تو آج ہی ایک درخت لگایں بنائیں',
                  hindiText:
                    'अगर आप जानते हैं कि कल क़यामत आ रही है, तो आज एक पेड़ लगाएं',
                  englishText:
                    'if you know that Qiyamat is coming tomorrow, plan a tree today',
                },
                {
                  url: 'https://youtube.com/embed/aLaLbNm3W34',
                  urduText: 'سڑک پر تھوکنے کی ایک مزاحیہ ویڈیو',
                  hindiText: 'सड़क पर थूकने का एक मज़ेदार वीडियो',
                  englishText: 'a funny video of spitting on road',
                },
                {
                  url: 'https://youtube.com/embed/iNRavFdKC8U',
                  urduText:
                    'کیا گندے مسلم معاشروں کے لئے کارپوریشن ذمہ دار ہے؟',
                  hindiText:
                    'क्या गंदे मुस्लिम मोहल्लों के लिए कारपोरेशन जिम्मेदार है?',
                  englishText:
                    'is corporation responsible for dirty Muslim societies?',
                },
                {
                  url: 'https://youtube.com/embed/XT9aDTC1aFY',
                  urduText: 'ویڈیو دیکھنا جاری رکھیں اور کل نقصان گنیں',
                  hindiText: 'वीडियो को देखते रहें और कुल नुकसान को गिनें',
                  englishText:
                    'keep on watching the video and count the total loss',
                },
                {
                  url: 'https://youtube.com/embed/fsdGsUOKWu4',
                  urduText: 'سڑک پر کچرا جمع ہونا کس طرح شروع ہوتا ہے؟',
                  hindiText: 'सड़क पर कचरा कैसे जमा होना शुरू होता है?',
                  englishText: 'how garbage starts collects on road?',
                },
                {
                  url: 'https://youtube.com/embed/2fs0IUQlzbw',
                  urduText:
                    'مسجد کی صفائی کرنے والے کچھ نوجوان - پونہ مہاراشٹر',
                  hindiText: 'मस्जिद की सफाई करते कुछ नौजवान - पूना महाराष्ट्र',
                  englishText:
                    'few young people cleaning Masjid - Pune Maharashtra',
                },
                {
                  url: 'https://youtube.com/embed/Huj1s7fRBB4',
                  urduText:
                    'غیر ملکی تبلیغی جماعت اور ہندوستانی گندے وضو خانہ اور ٹوائلٹ',
                  hindiText:
                    'बहार मुल्क की तब्लीगी जमात और भारतीय गंदे वुज़ू खान और टॉयलेट',
                  englishText:
                    'Foreign tablighi jamat and indian dirty wuzu khana and toilet',
                },
                {
                  url: 'https://youtube.com/embed/CRtVOE3zolw',
                  urduText: 'یورپ اور ہمارے معاشرے میں صفائی',
                  hindiText: 'यूरोप और हमारे समाज में स्वच्छता',
                  englishText: 'cleanliness in Europe and in our society',
                },
                {
                  url: 'https://youtube.com/embed/u3-uzMk90G8',
                  urduText: 'گھر اور کپڑا صاف لیکن معاشرے گندا',
                  hindiText: 'घर और कपड़ा साफ लेकिन समाज गंदा',
                  englishText: 'House and cloth clean but society dirty',
                },
              ],
            },
          },
          {
            name: 'Eating Habbits',
            content: {
              heading: 'GOOD AND BAD EATING HABITS',
              text:
                'Belly fat. When to eat and when to stop. Who gets the benefit of Gutkha. Eating habits of Prophet Mohammad (pbuh). Cycling',
              videosList: [
                {
                  url: 'https://youtube.com/embed/E4xQmyKN_Z0',
                  urduText:
                    'حضرت محمد صلی اللہ علیہ وسلم نے ایک شخص کے توند میں انگلی ڈالی',
                  hindiText:
                    'पैगंबर मोहम्मद ने एक आदमी के तोंद में अपनी उंगली डाल दी',
                  englishText:
                    "Prophet Mohammed put his finger in one man's tummy",
                },
                {
                  url: 'https://youtube.com/embed/18vN6X912os',
                  urduText:
                    'گٹکے - آپ اپنی صحت اور اپنی بیوی اور بچوں کے مستقبل کو خراب کرکے کمپنیوں کو فائدہ دے رہے ہیں. آپ گٹکے کے بہتر فوائد جانتے ہیں',
                  hindiText:
                    'गुटखा - आप अपनी सेहत और बीवी बच्चों के भविष्य ख़राब करके गुटखा कम्पनी का फ़ायदा कर रहे हो. गुटखा के फायदे तो आप जानते हो',
                  englishText:
                    'Gutkha- you are benefiting companies by spoiling your heath and future of your wife and children. you know better gutkha benefits',
                },
                {
                  url: 'https://youtube.com/embed/qu07R5HbNqE',
                  urduText: 'موٹاپا ہر طرح کی بیماری کا سبب ہے',
                  hindiText: 'मोटापा सभी बीमारी की वजह है',
                  englishText: 'Obesity is reason for all deceases',
                },
                {
                  url: 'https://youtube.com/embed/GKni72rRKow',
                  urduText:
                    'حضرت محمد مصطفی صلی اللہ علیہ وسلم کا کھانے کا طرز زندگی۔ انگریزی میں لیکچر',
                  hindiText:
                    'पैगंबर मोहम्मद की खाने की ज़िन्दगी - अंग्रेजी में बयान',
                  englishText:
                    'Eating lifestyle of Prophet Mohammad (pbuh) - Lecture in English',
                },
                {
                  url: 'https://youtube.com/embed/0kPfBb-jGAw',
                  urduText:
                    'صحت مند طرز زندگی اور کھانے کی عادات سے متعلق بہت سارے مشورے',
                  hindiText:
                    'सेहत मंद ज़िन्दगी और खाने के बारे में बहोत सारे मशवरे',
                  englishText:
                    'Many suggestions on healthy life style and eating habits',
                },
                {
                  url: 'https://youtube.com/embed/gQ-oKGKb9v0',
                  urduText: 'پیپسی اور کوکا کولا',
                  hindiText: 'पेप्सी और कोका कोला',
                  englishText: 'Pepsi and Coca cola',
                },
                {
                  url: 'https://youtube.com/embed/lz71IL6ZUxg',
                  urduText: 'دیندار لوگ بھی موٹے ہوتے ہیں',
                  hindiText: 'दीनदारा लोग भी मोठे होते हैं',
                  englishText: 'religious people are also obese',
                },
                {
                  url: 'https://youtube.com/embed/I9woF0Ry5A8',
                  urduText: 'کب کھانا ہے اور کب کھانا بند کرنا ہے؟',
                  hindiText: 'कब खाना है और कब खाना बंद करना है?',
                  englishText: 'when to eat and when to stop eating?',
                },
                {
                  url: 'https://youtube.com/embed/GOrxCTajtUs',
                  urduText: 'دفتر / کام پر سائیکلنگ',
                  hindiText: 'ऑफिस / काम के लिए साइकिल चलाना',
                  englishText: 'Cycling to office/work',
                },
                {
                  url: 'https://youtube.com/embed/vdmenPb41qw',
                  urduText: 'इस्लाम और जिम,',
                  hindiText: 'اسلام اور جم',
                  englishText: 'Islam and Gym',
                },
              ],
            },
          },
          {
            name: 'Food Waste',
            content: {
              heading: 'FOOD WASTING',
              text:
                'Waste of food even in buffet system. Food waste in India & world. Restaurant food waste use. Food waste in Ramzan. Roti Bank.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/mTYFnB1T2qU',
                  urduText: 'لوگ بوفے سسٹم میں بھی کھانا ضائع کرتے ہیں',
                  hindiText: 'लोग बुफे सिस्टम में भी खाना बर्बाद करते हैं',
                  englishText: 'People waste food even in buffet system',
                },
                {
                  url: 'https://youtube.com/embed/5II0d0B6p4s',
                  urduText:
                    'ایک شخص ہوٹل سے بچا ہوا کھانا خریدتا ہے اور ضرورت مندوں کو دیتا ہے',
                  hindiText:
                    'एक आदमी होटल से बचा हवा खाना खरीदता है और जरूरतमंदों को देता है',
                  englishText:
                    'A man buys left over food from restaurant and gives to needy',
                },
                {
                  url: 'https://youtube.com/embed/Cns3xYkjux8',
                  urduText:
                    'بچوں کو کھانا نہ پھیکنے کے بارے میں سکھاتے ہوے ایک چوٹی فلم',
                  hindiText:
                    'बच्चों को खाना नहीं फेकना है ये सिखाने के बारे में एक छोटी फिल्म',
                  englishText:
                    'Short documentary to teach children not to waste good',
                },
                {
                  url: 'https://youtube.com/embed/xwdlTrP-mno',
                  urduText: 'رمضان میں کھانا ضائع کرنا',
                  hindiText: 'रमजान में खाने की बर्बादी',
                  englishText: 'food waste in ramzan',
                },
                {
                  url: 'https://youtube.com/embed/8Qbl1UJWNQQ',
                  urduText: 'ہندوستان میں کھانے کی بربادی',
                  hindiText: 'इंडिया में खाने की बर्बादी',
                  englishText: 'Food waste in india',
                },
                {
                  url: 'https://youtube.com/embed/TKRN3toGpsE',
                  urduText: 'روٹی بینک۔ اورنگ آباد مہاراشٹر انڈیا',
                  hindiText: 'रोटी बैंक - औरंगाबाद महाराष्ट्र भारत',
                  englishText: 'Roti Bank - Aurangabad Maharashtra India',
                },
                {
                  url: 'https://youtube.com/embed/AbgnjpdFiTs',
                  urduText: 'وضو کرتے وقت پانی ضائع کرنا',
                  hindiText: 'वुज़ू करते हुए पानी बर्बाद करना',
                  englishText: 'Wasting water while doing ablution',
                },
                {
                  url: 'https://youtube.com/embed/rnLZ79F38wE',
                  urduText: 'زمین پر سب سے زیدہ بھوکا مقام',
                  hindiText: 'ज़मीन पर सब से ज़्यदा भूकी जगह',
                  englishText: 'the hungriest place on earth',
                },
              ],
            },
          },
          {
            name: 'Social Media',
            content: {
              heading: 'USE OF SOCIAL MEDIA',
              text:
                'Phone etiquette. Hajj/Umrah selfie. Wasting time on social media. Mobile phone in masjid. Fake WhatsApp messages.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/8ZF3Wa07r5A',
                  urduText: 'مولاانا طارق جمیل فون کے ستاہے ہوا',
                  hindiText: 'मौलाना तारिक़ जमील फ़ोन के सताए हुवे',
                  englishText: 'Maulana Tariq Jameel annoyed with phone',
                },
                {
                  url: 'https://youtube.com/embed/dnIUs5nRx7o',
                  urduText: 'مکہ مدینہ سیلفی پوائنٹ',
                  hindiText: 'मक्का मदीना सेल्फी पॉइंट',
                  englishText: 'Makkah Madina Selfi point',
                },
                {
                  url: 'https://youtube.com/embed/3Z7Tlxsb0KI',
                  urduText: 'سوشل میڈیا پر وقت ضائع کرنا',
                  hindiText: 'सोशल मीडिया पर समय की बर्बादी',
                  englishText: 'Waste of time on social media',
                },
                {
                  url: 'https://youtube.com/embed/TeN0nuFgJHk',
                  urduText: 'مسجد میں موبائل فون کے آداب',
                  hindiText: 'मस्जिद में मोबाइल फोन का आदाब',
                  englishText: 'Etiquette of mobile phone in masjid',
                },
                {
                  url: 'https://youtube.com/embed/9NB_ebkvjuo',
                  urduText: 'واٹس ایپ پر جھوٹھے پیغامات',
                  hindiText: 'व्हाट्सएप पर फेक मैसेजेस',
                  englishText: 'Fake messages on WhatsApp',
                },
                {
                  url: 'https://youtube.com/embed/hPE9WSUnpuo',
                  urduText: 'सोशल मीडिया में 5 साल बर्बाद',
                  hindiText: '5 سال سوشل میڈیا میں برباد ہوئے',
                  englishText: '5 years wasted in social media',
                },
                {
                  url: 'https://youtube.com/embed/iRZq5XWdWSA',
                  urduText: 'جھوٹھے وہاتساپپ پیغامات نے انسان کی جان لے لی',
                  hindiText: 'फेक/झूठे मेस्सगेस ने इंसान की जान ले ली',
                  englishText: 'Fake messages took lives of human being',
                },
                {
                  url: 'https://youtube.com/embed/7ZgoaIAHVvQ',
                  urduText: 'سوشل میڈیا کے فوائد',
                  hindiText: 'सोशल मीडिया के फायदे',
                  englishText: 'Benefits of social media',
                },
              ],
            },
          },
          {
            name: 'Pornography and Adult films',
            content: {
              heading: 'PORNOGRAPHY - NUDE FILMS',
              text:
                'Is porn real? Effect of masturbation. Porn addiction after marriage. how to stop addiction. Its effect on brain',
              videosList: [
                {
                  url: 'https://youtube.com/embed/Ebn2vvqElDM',
                  urduText: 'مشت زنی کے مضر اثرات - ایک ڈاکٹر کے ذریعہ',
                  hindiText:
                    'मुश्त ज़नी (अपने हाथ से पेशाब की जगह से मनि निकालना )के साइड इफेक्ट्स - एक डॉक्टर द्वारा',
                  englishText: 'Side effects of Masturbation - By a doctor',
                },
                {
                  url: 'https://youtube.com/embed/mt4MeYFGCzo',
                  urduText: 'فحش - حقیقت - پیر ذوالفقار کے ذریعہ',
                  hindiText: 'पोर्न - वास्तविहकीकत कता - पीर जुल्फिकार',
                  englishText: 'Porn - the reality - By Peer Zulfiqar',
                },
                {
                  url: 'https://youtube.com/embed/8MTZ4btuURw',
                  urduText: 'کس طرح فحش فلمیں شادی کو تباہ کرتی ہے؟',
                  hindiText: 'शादी को कैसे बर्बाद करता है पोर्न?',
                  englishText: 'How porn destroys marriage?',
                },
                {
                  url: 'https://youtube.com/embed/DQBATuqKp9A',
                  urduText:
                    'مشت زنی- اپنے ہاتھ سے پیشاب کی جگہ سے منی نکلنا - کے 19 اثرات',
                  hindiText:
                    'अपने हाथ से पेशाब की जगह से मानी निकालना के १९ नुकसान',
                  englishText: '19 Effects of Masturbation',
                },
                {
                  url: 'https://youtube.com/embed/gvsPI2X_reA',
                  urduText:
                    'آپ جو بھی دیکھ رہے ہیں وہ سب نقلی ہے۔ سب سے بڑی پیسا دینے والی صنعت',
                  hindiText: 'आप सभी देखें नकली है। सबसे बड़ा पैसा उद्योग',
                  englishText: 'all you see is fake. biggest money industry',
                },
                {
                  url: 'https://youtube.com/embed/yeDAC422Cks',
                  urduText: 'فحش لت کو کیسے روکا جائے؟',
                  hindiText: 'पोर्न की लत को कैसे रोकें?',
                  englishText: 'How to stop porn addiction?',
                },
                {
                  url: 'https://youtube.com/embed/wVBPvrg7e9s',
                  urduText: 'کیا فحش فلمیں اصلی ہے؟',
                  hindiText: 'क्या पोर्न असली है?',
                  englishText: 'is porn real?',
                },
                {
                  url: 'https://youtube.com/embed/QgJeYifYL1A',
                  urduText: 'کس طرح فحش آپ کے دماغ کو ختم کرتی ہے',
                  hindiText: 'कैसे पोर्न आपके दिमाग को नष्ट कर देता है',
                  englishText: 'How Porn Destroys Your Brain',
                },
              ],
            },
          },
          {
            name: 'Cloths Charity',
            content: {
              heading: '',
              text: '',
              videosList: [
                {
                  url: 'https://youtube.com/embed/-6UaCdGT1mI',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/xwyChsFjsBw',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/k2YvzlgoVp0',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
              ],
            },
          },
          {
            name: 'Street Beggers',
            content: {
              heading: 'STREET & MASJID BEGGERS',
              text:
                'Fake Street and Masjid Beggars. Beggars in Dubai and Beggars who are richer than you',
              videosList: [
                {
                  url: 'https://youtube.com/embed/4CQFBRrWArE',
                  urduText: 'دبئی میں بھکاری',
                  hindiText: 'दुबई में भिखारी',
                  englishText: 'Beggars in Dubai',
                },
                {
                  url: 'https://youtube.com/embed/hRA8qjion4g',
                  urduText: 'پیشہ ور بھکاریوں کو پیسے دینا',
                  hindiText: 'पेशेवर भिखारियों को पैसे देते हैं',
                  englishText: 'Giving money to professional beggars',
                },
                {
                  url: 'https://youtube.com/embed/gRtsfX4k9VY',
                  urduText:
                    'سڑکوں پر کے مانگنے والوں کو پیسے کے علاوہ مدد کریں',
                  hindiText:
                    'सड़क पर के मांगने वालों को पैसे के अलावा मदद करें',
                  englishText: 'Help street begger not with money',
                },
                {
                  url: 'https://youtube.com/embed/I_-SP4kCNVo',
                  urduText: 'جھوٹھے سڈاکوں کے بھکارو کو رنگے ہاتھ پکڑا',
                  hindiText: 'नकली सड़क भिखारी को रंगे हाथ पकड़ा',
                  englishText: 'Fake street beggar caught red handed',
                },
                {
                  url: 'https://youtube.com/embed/MDgPMnacals',
                  urduText: 'ایک بھکاری جو آپ سے زیادہ امیر ہے',
                  hindiText: 'एक भिखारी जो आपसे ज्यादा अमीर है',
                  englishText: 'A beggar who is richer than you',
                },
                {
                  url: 'https://youtube.com/embed/qmjdQ236Dus',
                  urduText: 'اس معاملے میں صدقہ کرنا حرام ہے',
                  hindiText: 'इस मामले में सदक़ा करना हराम है',
                  englishText: 'Doing charity is Haram in this case?',
                },
              ],
            },
          },
          {
            name: 'Corruption',
            content: {
              heading: 'CORRUPTION',
              text:
                'Generally speaking as “the abuse of entrusted power for private gain”. Corruption can be classified as grand, petty and political, depending on the amounts of money lost and the sector where it occurs.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/QXwZLdQG3nw',
                  urduText: 'ابادی یا کرپشن؟',
                  hindiText: 'आबादी या करप्शन?',
                  englishText: 'Population or corruption?',
                },
                {
                  url: 'https://youtube.com/embed/psDT3YCV-Lo',
                  urduText: 'چین کو ایک بچے کی پالیسی ختم کیوں کرنی پڑی؟',
                  hindiText: 'चीन को एक बच्चे की पॉलिसी ख़तम क्यूं करनी पड़ी?',
                  englishText: 'Why china had a abolish one child policy?',
                },
                {
                  url: 'https://youtube.com/embed/15wN2lwGYN4',
                  urduText:
                    'دنیا کا پیسہ اور وسائل صرف چند لوگوں کے ہاتھوں میں ہے',
                  hindiText: 'दुनिया का पैसा सिर्फ चंद लोगों के हाथों में है।',
                  englishText: "World wealth/money is only few people's hand",
                },
                {
                  url: 'https://youtube.com/embed/Getvca8shZ8',
                  urduText: 'کسی کا مال نہ حق کھانا',
                  hindiText: 'किसी का माल ना हक़ खाना',
                  englishText: "illegally taking someone's money",
                },
              ],
            },
          },
          {
            name: 'Education',
            content: {
              heading: 'MUSLIM IN EDUCATION',
              text: 'Muslim in Education',
              videosList: [
                {
                  url: 'https://youtube.com/embed/phBN9b-kexU',
                  urduText: 'سچر کمیٹی کی رپورٹ',
                  hindiText: 'सच्चर कमेटी की रिपोर्ट',
                  englishText: 'sachhar committee report',
                },
                {
                  url: 'https://youtube.com/embed/nKD9O4eFIig',
                  urduText:
                    'حکومتی نوکریوں میں ہندوستان کے مسلمانوں کا تناسب کتنا ہے؟',
                  hindiText: 'कितने इंडियन मुस्लिम गवर्नमेंट नौकरी करते हैं?',
                  englishText: 'How many Indian Muslim in government jobs?',
                },
                {
                  url: 'https://youtube.com/embed/a_u1FmXc32c',
                  urduText: 'ہندوستان کے مسلمانوں کی بدحالی کے پانچ وجوہات',
                  hindiText: 'हिन्दुस्तान के मुसलमानों की बद हाली की पांच वजह',
                  englishText: 'Five reasons of Muslim backwardness in India',
                },
                {
                  url: 'https://youtube.com/embed/iG6e0JUWuNE',
                  urduText: 'ہندوستان مسلمانوں کے تعلیمی معدوم شمارہ کے نمبر',
                  hindiText: 'हिन्दुस्तान में मुस्लिम एजुकेशन सर्वे',
                  englishText: 'Statistics data on indian muslim education',
                },
                {
                  url: 'https://youtube.com/embed/mt75TIa1ul0',
                  urduText: 'آج مسلمان سائنس میں کیوں نہیں ہیں؟',
                  hindiText: 'आज साइंस में मुसलमान क्यों नहीं हैं?',
                  englishText: 'why muslims are not in science today?',
                },
                {
                  url: 'https://youtube.com/embed/Tsqu2KBu6SU',
                  urduText: 'مسلمان کب پڑھے گا؟',
                  hindiText: 'मुसलमान कब पढ़ेगा?',
                  englishText: 'When the Muslim will study?',
                },
              ],
            },
          },
          {
            name: 'Family System in West',
            content: {
              heading: 'LIFE IN WESTERN COUNTRIES',
              text:
                'People not speaking to Friends/Families, Kids only with mothers and no fathers,Kids without marriage, problem due to no presence of father, Men suicide, legal suicide in Switzerland. Same sex marriage',
              videosList: [
                {
                  url: 'https://youtube.com/embed/qFOvxG5sXpM',
                  urduText:
                    'لوگ اپنے رشتے داروں اور دوستوں سے بات نہ کرتے ہوے. اکیلے لوگوں کے لئے کال سینٹر اور وزیر thesilverline.org.uk',
                  hindiText:
                    'लोगों का अपने परिवार / दोस्तों से बात नहीं करना । अकेले लोगों के लिए कॉल सेंटर और मंत्री (thesilverline.org.uk)',
                  englishText:
                    'people have people not speaking to their families/friends.Call center & minister for lonely people ( thesilverline.org.uk)',
                },
                {
                  url: 'https://youtube.com/embed/o1xf78EltKM',
                  urduText: 'اکیلی ماں کی زندگی - بغیر باپ کے',
                  hindiText: 'अकेली माँ का जीवन (पिता के बिना)',
                  englishText: 'Life of a single Mom (without father).',
                },
                {
                  url: 'https://youtube.com/embed/hBR0_VIuf-A',
                  urduText: 'شادی کے بغیر بچے',
                  hindiText: 'शादी के बिना के बच्चे',
                  englishText: 'Out of wedlock (without marriage) kids',
                },
                {
                  url: 'https://youtube.com/embed/1y6A8BnKbCA',
                  urduText: 'بغیر باپ کے رہنے کے مسایل',
                  hindiText: 'बग़ैर बाप के रहने के मसाएल',
                  englishText: 'The Problem of Fatherlessness',
                },
                {
                  url: 'https://youtube.com/embed/Q8G1IsoSDJk',
                  urduText: 'برطانیہ میں ہر سال 6000 مرد خودکشی کرتے ہیں',
                  hindiText: 'ब्रिटेन में हर साल 6000 पुरुष आत्महत्या करते हैं',
                  englishText: '6000 Men commit suicide every year in UK',
                },
                {
                  url: 'https://youtube.com/embed/RLDNlME5pYo',
                  urduText:
                    'پوری دنیا میں قانونی خود کشی ۔ سوئٹزرلینڈ - خودکش مرکز',
                  hindiText:
                    'दुनिया भर में कानूनी आत्महत्या (इच्छामृत्यु)। स्विट्जरलैंड - आत्महत्या केंद्र',
                  englishText:
                    'Legal suicide (euthanasia) around the world. Switzerland - suicide center',
                },
                {
                  url: 'https://youtube.com/embed/X44sG4Bfp2Y',
                  urduText: 'ہم جنس پرست دنیا بھر میں شادی',
                  hindiText: 'दुनिया भर में समलैंगिक विवाह',
                  englishText: 'homosexual marriage around the world',
                },
                {
                  url: 'https://youtube.com/embed/EnUqDjCqg0A',
                  urduText: 'ہم جنسی میں ذہنی بیماریاں',
                  hindiText: 'समान सेक्स मैरिज में दिमागी प्रॉब्लम',
                  englishText: 'Mental problem in same sex marriage',
                },
                {
                  url: 'https://youtube.com/embed/S50HD8plkVI',
                  urduText: 'جب غیرت مر جاتی ہے',
                  hindiText: 'जब गैरत मर जाती है।',
                  englishText: "When there's no pudicity",
                },
              ],
            },
          },
          {
            name: 'Dispute Solving',
            content: {
              heading: 'DARUL QAZA/ SHARIAH COURT',
              text:
                "What is Darul Qaza? its importance in today's society and assistance to indian judiciary system. How Prophet Mohammad (pbuh) establish Darul Qaza in Madina. Also pending court cases in Indian courts",
              videosList: [
                {
                  url: 'https://youtube.com/embed/FwHa5INAi4s',
                  urduText: 'دارالقضا کیا ہے',
                  hindiText: 'दारुल क़ज़ा क्या है',
                  englishText: 'What is Darul Qaza',
                },
                {
                  url: 'https://youtube.com/embed/0hJddnvyeqE',
                  urduText: 'دار القضا اورکورٹ سسٹم',
                  hindiText: 'दार अलक़ज़ा और कोर्ट सिस्टम',
                  englishText: 'Darul Qaza and court system?',
                },
                {
                  url: 'https://youtube.com/embed/NztfcknqHgk',
                  urduText:
                    'کیا دار القضا بھارت میں اسلامک اسٹیٹ لانا چاہتا ہو ؟',
                  hindiText:
                    'क्या दारुल क़ज़ा भारत में इस्लामिक स्टेट लाना चाहता है?',
                  englishText:
                    'is shariah court to bring islamic state in India?',
                },
                {
                  url: 'https://youtube.com/embed/0Lc_HjTpB0A',
                  urduText: 'شہر قاضی کی ذمہ داری کیا ہے؟',
                  hindiText: 'शायर काजी की जिम्मेदारी क्या है?',
                  englishText: 'what is responsibility of shaher Qazi?',
                },
                {
                  url: 'https://youtube.com/embed/WRfeReykaK0',
                  urduText: 'شہر ناندیڑ میں دارالقضا کی مجموعی رپورٹ',
                  hindiText: 'शहर नांदेड़ में दारुल क़ज़ा की रिपोर्ट',
                  englishText: 'overall Report of Darul Qaza in city Nanded',
                },
                {
                  url: 'https://youtube.com/embed/RT6dpxydc9g',
                  urduText: 'ہندوستانی عدلیہ کے نظام کو دارالقضا سے فائدہ',
                  hindiText: 'दारुल क़ज़ा से भारत के क़ानूनी सिस्टम को फ़ायदा',
                  englishText:
                    'Benefit of Darul Qaza to Indian judiciary system',
                },
                {
                  url: 'https://youtube.com/embed/GFIO-hHhk7o',
                  urduText:
                    'حضرت محمد نے دارالقضاء قائم کیا اور بہت سارے قاضی پیدا کیے۔ غیر مسلم اپنے مقدمات لائے۔',
                  hindiText:
                    'पैगंबर मोहम्मद ने दारुल कजा की स्थापना की और कई अन्य काजी बनाए। गैर मुस्लिमों ने अपने मामले लाए।',
                  englishText:
                    'Prophet Mohammad established Darul Qaza and created many other Qazi. Non muslim brought their cases.',
                },
                {
                  url: 'https://youtube.com/embed/qw2_Hn9GrCU',
                  urduText: 'دارالقضا کیا ہے - ایک وکیل کے ذریعہ',
                  hindiText: 'दारुल क़ज़ा क्या है - एक वकील के ज़रिये',
                  englishText: 'What is Darul Qaza - by an Advocate',
                },
                {
                  url: 'https://youtube.com/embed/wCO26NFxlzw',
                  urduText: 'ہندوستان عدالت میں پینڈنگ کورٹ کیس',
                  hindiText: 'इंडिया में कितने कोर्ट कैसे अभी भी पेंडिंग है',
                  englishText: 'Total pending court cases in India',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Economical Issues',
        children: [
          {
            name: 'Property Distribution',
            content: {
              heading: 'PROPERTY DISTRIBUTION IN INDIAN MUSLIM',
              text:
                "What is Property distribution is Islam? Fight among families. Women's share in property.How to distribute as per Islamic Law",
              videosList: [
                {
                  url: 'https://youtube.com/embed/ahMtxBxgZCY',
                  urduText:
                    'ایک عالم نے تحفہ قبول کرنے کے پہلے وراثت کی تقسیم کا پوچھا',
                  hindiText:
                    'एक अलीम से तोहफा क़ुबूल करने के पहले प्रॉपर्टी तक़सीम का पुछा?',
                  englishText:
                    'Islamic scholar asked question about property distribution before accepting gift?',
                },
                {
                  url: 'https://youtube.com/embed/h79UTzBuSjQ',
                  urduText:
                    'جائیداد میں حصہ نہ دینا حرام ہے اور گناہچوری ڈکیتی کے برابر ہے',
                  hindiText:
                    'जायदाद में हिस्सेदारी नहीं देना हराम है और गुनाह चोरी /डकैती के बराबर है',
                  englishText:
                    'Not Giving share in property is Haram and sin is equal to robbery',
                },
                {
                  url: 'https://youtube.com/embed/fmUN2g2DDCg',
                  urduText: 'مرنے کے پہلے پراپرٹی تقسیم کرنا کیسا ہے ؟',
                  hindiText: 'मरने के पहले प्रॉपर्टी तक़सीम करना',
                  englishText: 'division of property before death',
                },
                {
                  url: 'https://youtube.com/embed/Pc_IZkFXk48',
                  urduText:
                    'کیا لڑکی کی شادی کرا دینے سے اسکا پراپرٹی میں حصّہ نہیں رہتا؟',
                  hindiText:
                    'क्या लड़की की शादी करने से या जहेज़ देने से उसका प्रॉपर्टी में हिस्सा नहीं रहता?',
                  englishText:
                    'is property share of a woman not valid after doing her marriage expenses/dowry?',
                },
                {
                  url: 'https://youtube.com/embed/Hgp3gPmF5Yc',
                  urduText: 'والدین کی موت کے بعد بچوں میں جھگڑے',
                  hindiText: 'माँ बाप के मरने के बाद बच्चों में झगडे',
                  englishText: 'Fight after death of parent.',
                },
                {
                  url: 'https://youtube.com/embed/zSb5YoqHQNA',
                  urduText: 'جائیداد کی تقسیم کے بارے میں کچھ معلومات',
                  hindiText: 'जायदाद की तक़सीम के बारे में कुछ मालूमात',
                  englishText: 'some knowledge about property distribution',
                },
                {
                  url: 'https://youtube.com/embed/UDZYGEBuiK4',
                  urduText: 'جائیداد کی تقسیم کے بارے میں کچھ معلومات',
                  hindiText: 'जायदाद की तक़सीम के बारे में कुछ मालूमात',
                  englishText: 'some knowledge about property distribution',
                },
                {
                  url: 'https://youtube.com/embed/kRDK47zQOgc',
                  urduText:
                    'قرآن مجید کی 4 آیات جس پر بہت سی کتابیں لکھی گئیں ہیں',
                  hindiText: 'कुरान की 4 आयतें जिन पर कई किताबें लिखी गई हैं',
                  englishText:
                    '4 verses of Quran on which many books have been written',
                },
                {
                  url: 'https://youtube.com/embed/sgXlcm--kMA',
                  urduText:
                    'حج / عمرہ میں جانا اور بہنوں کو جائیداد کا حصہ نہیں دینا',
                  hindiText:
                    'हज / उमर में जाना और बहनों को प्रॉपर्टी का हिस्सा नहीं देना',
                  englishText:
                    'Going to hajj/umrah and not giving property share to sisters',
                },
                {
                  url: 'https://youtube.com/embed/WfWtpjzdH-U',
                  urduText:
                    'جائیداد میں حصہ طلب کرنے سے پہلے والدین کے ساتھ اپنے سلوک کو بہتر بنائیں',
                  hindiText:
                    'जायदाद में हिस्सेदारी मांगने से पहले माता-पिता के साथ अपने व्यवबर्ताव हार में सुधार करें',
                  englishText:
                    'Improve your behavior with parents before asking for share in property',
                },
                {
                  url: 'https://youtube.com/embed/6sfFfhtzFgE',
                  urduText: 'ایسا مسلم مت بنو جو صرف نماز پڑھتا ہو',
                  hindiText: 'ऐसा मुस्लिम मत बनो जो सिर्फ नमाज़ पढ़ता हो।',
                  englishText:
                    "Don't be a Muslim who think Islam is only namaz",
                },
              ],
            },
          },
          {
            name: 'Money Lending',
            content: {
              heading: 'GUIDELINE MONEY LENDING/QARZ',
              text:
                'Who is good person? Quran on Qarz/debt. Debt of a martyr. Tone of people while returning money. And what about person who does not return a debt',
              videosList: [
                {
                  url: 'https://youtube.com/embed/5gd_E5TT-LI',
                  urduText:
                    'اچھے شخص کی علامت وہ ہے جو قرض لیتا ہے اور وقت پر واپسی کرتا ہے۔',
                  hindiText:
                    'अच्छे आदमी की पहचान वो है जो क़र्ज़ लेता है और वक़्त पर वापस करता है',
                  englishText:
                    'sign of good person is who takes debt and returns on time.',
                },
                {
                  url: 'https://youtube.com/embed/tNkBzxGvHgI',
                  urduText:
                    'قرآن مجید میں سب سے طویل آیت رقم دینے اور لینے کے طریقہ کے بارے میں',
                  hindiText:
                    'पैसे देने और लेने के बारे में कुरान में सबसे लम्बी आयत (क़र्ज़)',
                  englishText:
                    'most lengthy Ayat in Quran about how to give and take money (Qarz)',
                },
                {
                  url: 'https://youtube.com/embed/-kfpKDQqSmQ',
                  urduText: 'شہید کا قرض بھی معاف نہیں ہوتا ہے',
                  hindiText: 'एक शहीद का कर्ज भी माफ नहीं होता',
                  englishText: 'Debt of a martyr is also not forgiven',
                },
                {
                  url: 'https://youtube.com/embed/0UZCHh1yQ0U',
                  urduText: 'قرض واپس کرنے کے وقت لوگوں کا لہجہ بدل جاتا ہے۔',
                  hindiText: 'लोग कर्ज वापस करते समय टोन बदल देते हैं।',
                  englishText:
                    'people change tone at the time of returning the debt.',
                },
                {
                  url: 'https://youtube.com/embed/xOrgk5xxAXk',
                  urduText:
                    'وہ شخص جو قرض واپس کرسکتا ہے لیکن واپس نہیں کرتا ہے وہ ظالم ہے',
                  hindiText:
                    'वह व्यक्ति क़र्ज़ वापस कर सकता है लेकिन वापस नहीं आता है वह ज़ालिम है',
                  englishText:
                    "person who can return debt but doesn't return is oppressor",
                },
                {
                  url: 'https://youtube.com/embed/HSAs7yYdIgI',
                  urduText:
                    'قرض دینے سے پہلے اپنے آپ کو کس طرح محفوظ رکھنا ہے ، سور البقر. ، آیت نمبر 282',
                  hindiText:
                    'कर्ज देने से पहले खुद को कैसे सुरक्षित रखें, सूरह अल बक़रह, आयत 282',
                  englishText:
                    'how to safe side yourself before giving debt, Surah Al Baqarah , ayat 282',
                },
                {
                  url: 'https://youtube.com/embed/xgSqtlui0H0',
                  urduText: 'میں نے کسکا قرض واپس کیا تھا کہ اب کرونگا',
                  hindiText: 'किसका क़र्ज़ मैं ने वापस किया के अब करूंगा',
                  englishText: 'to whom i returned debt that i will return now',
                },
                {
                  url: 'https://youtube.com/embed/Y_A1SG3Fijg',
                  urduText:
                    'جو قرض واپس نہیں کرتا ہے اسے قیامت کے دن اپنی نیکیاں دینا پڑتی ہیں',
                  hindiText:
                    'जो कर्ज नहीं लौटाता है उसे क़यामत के दिन अपने नेक आमाल देना होता है',
                  englishText:
                    'the one who does not return debt has to give his good deeds on day of judgment',
                },
              ],
            },
          },
          {
            name: 'Buisiness Improvment',
            content: {
              heading: 'MUSLIM BUSINESSMEN AND WHY BUSINESS DOES NOT WORK',
              text:
                'Why should customer come to you? Laziness on the name of Islam. Effect of politeness. why business of non-Muslims work? Incorrect concept of Destiny. Working hard. Sahaba in Indonesia',
              videosList: [
                {
                  url: 'https://youtube.com/embed/UaVv8swrkJc',
                  urduText:
                    'کسٹمر کو آپ کی دکان پر آنا چاہئے اور دوسری دکانوں میں کیوں نہیں جانا چاہئے؟',
                  hindiText:
                    'ग्राहक आपकी दुकान पर क्यों आना चाहिए और अन्य दुकानों पर क्यों नहीं जाना चाहिए?',
                  englishText:
                    'Why customer should come to your shop and no go to other shops?',
                },
                {
                  url: 'https://youtube.com/embed/_iosjWAhJwQ',
                  urduText: 'سست تاجر',
                  hindiText: 'सुस्त व्यापारी',
                  englishText: 'Lazy businessmen',
                },
                {
                  url: 'https://youtube.com/embed/LwD2IA0GSWY',
                  urduText: 'تجارت اور دین کی محنت',
                  hindiText: 'तिजारत और दिन की मेहनत',
                  englishText: 'Business and doing effort for deen',
                },
                {
                  url: 'https://youtube.com/embed/5E-zoxqqnU0',
                  urduText: 'کاروبار میں زبان میں نرمی',
                  hindiText: 'کاروبار میں زبان میں نرمی',
                  englishText: 'softness in tone in business',
                },
                {
                  url: 'https://youtube.com/embed/bgz2uh5hLMU',
                  urduText: 'کاروبار میں غصّے والے کسٹمر سے کیسے برتاو کریں',
                  hindiText:
                    'कारोबार में गुस्सा वाले कस्टमर से कैसे बर्ताव करें',
                  englishText: 'how to treat angry customer',
                },
                {
                  url: 'https://youtube.com/embed/FxVh-md3N_I',
                  urduText:
                    'یہو کا کاروبار کیوں چلتا ہے اور مسلمان کا کاروبار کیوں نہیں چلتا؟',
                  hindiText:
                    'क्यों यहूदी और गैर मुस्लिम का कारोबार चलता है और मुस्लिमों का कारोबार नहीं चलता है',
                  englishText:
                    "why business of Jews runs and business of Muslim doesn't run",
                },
                {
                  url: 'https://youtube.com/embed/1QtxHKfHhAU',
                  urduText: 'تقدیر اور توکل پر غلط یقین اور بزنس',
                  hindiText: 'तकदीर और तवक्कल का गलत यकीन और बिज़नेस',
                  englishText:
                    'wrong belief/tawakkal on luck/destiny and business',
                },
                {
                  url: 'https://youtube.com/embed/bPsXZiiRHOQ',
                  urduText: 'آپ کو شروع میں 16-18 گھنٹے کام کی ضرورت ہے',
                  hindiText:
                    'आपको शुरुआत में 16-18 घंटे बिताकाम करने की जरूरत है',
                  englishText: 'you need to spend 16-18 hours in the beginning',
                },
                {
                  url: 'https://youtube.com/embed/pm5z4jO5xRQ',
                  urduText: 'انڈونیشیا میں صحابہ',
                  hindiText: 'इंडोनेशिया में सहाबा',
                  englishText: 'Sahaba in Indonesia',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Religious Issues',
        children: [
          {
            name: 'Understanding Quran',
            content: {
              heading: 'NOT UNDERSTANDING QURAN',
              text:
                'Can only ulema understand the Quran? How to understand Quran? Famous Tafseer and how Quran was compiled in a book',
              videosList: [
                {
                  url: 'https://youtube.com/embed/-HWIfBKtVBU',
                  urduText: 'کیا صرف علمائے کرام قرآن کو سمجھ سکتے ہیں؟',
                  hindiText: 'क्या सिर्फ उलेमा ही कुरान को समझ सकते हैं?',
                  englishText: 'Can only ulema understand Duran?',
                },
                {
                  url: 'https://youtube.com/embed/GRBAdf_rDbM',
                  urduText:
                    'پچاس ساٹھ سال گزر جاتے ہیں لیکن سورہ الم ترا اور چھوٹے سورتوں کے بھی معنی نہیں معلوم',
                  hindiText:
                    'आदमी अपने ज़िन्दगी के 50-60 वर्ष गुज़ारता है लेकिन वह सुराह अलिफ लाम मीम और छोटे सुरा का मतलब नहीं जानता है',
                  englishText:
                    'person spends 50-60 years of his life and he does not know meaning of surah alif laam mim and small surah',
                },
                {
                  url: 'https://youtube.com/embed/kZUXl9JbdVw',
                  urduText: 'قرآن کو کیسے سمجھا جائے؟',
                  hindiText: 'कुरान को कैसे समझें?',
                  englishText: 'How to understand quran?',
                },
                {
                  url: 'https://youtube.com/embed/G7M_GS9bbng',
                  urduText: 'بہترین تفسیر',
                  hindiText: 'अच्छी तफ़सीर की किताब',
                  englishText: 'The Best Tafseer',
                },
                {
                  url: 'https://youtube.com/embed/4a0JTlXJX4Y',
                  urduText: 'کیسے بطور کتاب قرآن مجید تخلیق ہوا',
                  hindiText: 'कुरान को एक किताब के रूप में कैसे बनाया गया',
                  englishText: 'How Quran created as a book',
                },
                {
                  url: 'https://youtube.com/embed/B-ye0mnqF9k',
                  urduText: 'قرآن مجید کے مشہور مفسیر کی سیرت',
                  hindiText: 'कुरान की मशहूर मुफस्सिर की ज़िन्दगी',
                  englishText: 'biography of famous mufassir of Quran',
                },
                {
                  url: 'https://youtube.com/embed/Tzfl9aVfZow',
                  urduText:
                    'دوسری زبانوں میں قرآن مجید کا ترجمہ لکھنے کا مقصد کیا ہے؟',
                  hindiText:
                    'अलग अलग ज़बानो में कुरान के तर्जुमा लिखने का मक़सद क्या है',
                  englishText:
                    'what is purpose of writing translation of Quran in other languages',
                },
                {
                  url: 'https://youtube.com/embed/BycnUq1UO5o',
                  urduText: 'کیا کیمسٹری حیاتیات آپ کو اچھے انسان بنائے گی؟',
                  hindiText:
                    'क्या केमिस्ट्री बायोलॉजी आपको अच्छा इंसान बनाएगी?',
                  englishText:
                    'can only Chemistry biology will make you good human?',
                },
                {
                  url: 'https://youtube.com/embed/NBkbJZ1jGdg',
                  urduText: 'کیسے بطور کتاب قرآن مجید تخلیق ہوا',
                  hindiText: 'कुरान को एक किताब के रूप में कैसे बनाया गया',
                  englishText: 'How Quran created as a book',
                },
              ],
            },
          },
          {
            name: 'Seerat un Nabi',
            content: {
              heading: 'LIFE OF PROPHET MOHAMMAD (PEACE BE UPON HIM)',
              text:
                'Life of Prophet Mohammad (peace be upon him) from his childhood to his last moment. Also First among with top 100 world personalities.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/WfLIflyBSz4',
                  urduText:
                    'اللّٰہ کے نبی صلی اللہ علیہ وسلم کی پیدائش کا دن اور معجزات',
                  hindiText: 'अल्लाह के नबी के पैदाइश का दिन और करिश्में',
                  englishText:
                    'Date of birth of birth of prophet Muhammad and miracles',
                },
                {
                  url: 'https://youtube.com/embed/7lUXuYYl22c',
                  urduText:
                    'اللّٰہ کے نبی صلی اللہ علیہ وسلم کا بچپن ، عادات و اخلاق اور عرب کی جہالت اور صفات',
                  hindiText: 'अल्लाह के रसूल का बचपन, अरब की जहालत और सिफात',
                  englishText:
                    'Childhood of prophet Muhammad. Illiteracy in Arabs. And their qualities',
                },
                {
                  url: 'https://youtube.com/embed/uwFbfo5Ydws',
                  urduText:
                    'اللّٰہ کے نبی صلی اللہ علیہ وسلم کی تجارت اور بیرونی سفر',
                  hindiText: 'अल्लाह के रसूल की तिजारत और अरब के बाहर के सफर',
                  englishText: 'Business of prophet Muhammad and foreign trips',
                },
                {
                  url: 'https://youtube.com/embed/IMqWOppkE1k',
                  urduText:
                    'حضرت خدیجہ (ر۔ض) کی زندگی اور اللہ کے رسول صلی اللہ علیہ وسلم سے نکاح',
                  hindiText:
                    'हज़रत खदीजा (र आ) की ज़िन्दगी और अल्लाह के रसूल से निकाह',
                  englishText:
                    'Life of Hazrat Khadeeja(r.a) and marriage with prophet Muhammad ( peace be upon him)',
                },
                {
                  url: 'https://youtube.com/embed/LZ-dByA1D6U',
                  urduText:
                    'قرآن کی پہلی آیت کے نازل ہونے کے بارے میں، غار حرا مکہ کے نزدیک',
                  hindiText:
                    'क़ुरआन की पहली आयात के नाजिल होने का वाकया, घार हीरा में मक्का के नजदीक',
                  englishText:
                    'About first revelation of Quranic ayat in Cave of Hira, near Makkah',
                },
                {
                  url: 'https://youtube.com/embed/vupHu4ZRZ8I',
                  urduText: 'مکہ سے مدینہ (یثرب) حجرت کا واقعہ',
                  hindiText: 'मक्काह से मदीना (यसरीब)हिजरत का वाकया',
                  englishText: 'Hijrat from Makkah to Madina (yasrib)',
                },
                {
                  url: 'https://youtube.com/embed/s4-0chXu4LE',
                  urduText: 'مدینہ کے اور وہاں کے مقامی قبائل کی حالات',
                  hindiText: 'मदीना और वहां के कबीले के हालात',
                  englishText: 'Background of Madina and locals Tribes',
                },
                {
                  url: 'https://youtube.com/embed/8FFOZidDtDg',
                  urduText: 'جنگ بدر',
                  hindiText: 'जंग बदर',
                  englishText: 'Battle of Badar',
                },
                {
                  url: 'https://youtube.com/embed/kyWgoFHoMvQ',
                  urduText: 'نبی محمد کی بیویاں',
                  hindiText: 'पैगंबर मोहम्मद की पत्नियां',
                  englishText: 'wives of prophet mohammad',
                },
                {
                  url: 'https://youtube.com/embed/wJXZEP6JBvs',
                  urduText:
                    'الله کے نبی کا پہلا اور آخری حج اور امّت کے لئے اہم پیغام',
                  hindiText:
                    'अल्लाह के नबी का पहला और आखरी हज और बहोत एहम हिदायत',
                  englishText:
                    'the Only hajj of Prophet Mohammad and important message',
                },
                {
                  url: 'https://youtube.com/embed/EdvtnhBHF4s',
                  urduText: 'آخری لمحہ اور نبی محمد صلی اللہ علیہ وسلم کی وفات',
                  hindiText: 'अल्लाह के नबी के आखरी लम्हात और वफ़ात',
                  englishText:
                    'Last moment and Death of prophet Mohammad (pbuh)',
                },
                {
                  url: 'https://youtube.com/embed/eEVHdeZLgl0',
                  urduText: 'دنیا کی 100 اثر دار شخصیات',
                  hindiText: 'दुनिया की १०० असर दार शक्सियात',
                  englishText: 'Top 100 influential personalities of the world',
                },
              ],
            },
          },
          {
            name: 'Living with Non-Muslims',
            content: {
              heading: 'LIVING WITH NON-MUSLIMS',
              text:
                "Non-Muslim's/minorities right in Islamic rule. showing good character with them. This much involvement is not allowed.",
              videosList: [
                {
                  url: 'https://youtube.com/embed/o-KlFGWUvFY',
                  urduText: 'غیر مسلم سے برتاو کے بارے میں حدیث',
                  hindiText: 'गैर-मुसलमानों के बर्ताव के बारे में हदीस',
                  englishText: 'Hadis regarding treating non-muslims',
                },
                {
                  url: 'https://youtube.com/embed/rvejUe8_h3A',
                  urduText: 'غیر مسلم سے برتاو کے بارے میں',
                  hindiText: 'गैर-मुसलमानों के बर्ताव के बारे में',
                  englishText: 'regarding treating non-muslims',
                },
                {
                  url: 'https://youtube.com/embed/htLhRe08bWw',
                  urduText: 'نبی محمد نے غیر مسلموں کے ساتھ کیسا سلوک کیا؟',
                  hindiText:
                    'पैगंबर मोहम्मद ने गैर मुसलमानों से कैसे व्यवहार किया?',
                  englishText: 'how prophet Mohammad treated non Muslims?',
                },
                {
                  url: 'https://youtube.com/embed/CHFtfe_5L8c',
                  urduText: 'غیر مسلم اقلیتوں کے قانونی پہلو',
                  hindiText: 'गैर-मुस्लिम अल्पसंख्यकों के कानूनी पहलू',
                  englishText: 'legal aspects of non-Muslim minorities',
                },
                {
                  url: 'https://youtube.com/embed/XB94Q2j94uo',
                  urduText:
                    'غیر مسلموں کے ساتھ رہتے ہوئے کیا احتیاطی تدابیر اختیار کی جائیں',
                  hindiText:
                    'गैर मुस्लिमों के साथ रहने के दौरान किन सावधानियों का ध्यान रखना चाहिए',
                  englishText:
                    'precautions to be taken care while living with non Muslims',
                },
                {
                  url: 'https://youtube.com/embed/XkCxohRT6rk',
                  urduText: 'پرساد کھانے کی اجازت کیوں نہیں ہے؟',
                  hindiText: 'प्रसाद खाने की अनुमति क्यों नहीं है?',
                  englishText: 'why eating prasad is not allowed?',
                },
                {
                  url: 'https://youtube.com/embed/QbhP8EmGh3s',
                  urduText: 'اسلامی حکمرانی میں اقلیتیں (غیر مسلم) 13 پوائنٹس',
                  hindiText:
                    'इस्लामी शासन में अल्पसंख्यक (गैर-मुस्लिम) - १३ पॉइंट्स',
                  englishText:
                    'Minorities (non-muslims) in Islamic rule , 13 points',
                },
                {
                  url: 'https://youtube.com/embed/d40Iq8LJ4G4',
                  urduText: 'خلیفہ عمر نے ایک غیر مسلم بھکاری کی مدد کی',
                  hindiText: 'खलीफा उमर ने एक गैर मुस्लिम भिखारी की मदद की',
                  englishText: 'Caliph Umar helped a non muslim begger',
                },
              ],
            },
          },
          {
            name: 'Missing Fajr',
            content: {
              heading: 'WAKE UP FOR FAJR',
              text: '',
              videosList: [],
            },
          },
          {
            name: 'Azan and its Volume',
            content: {
              heading: 'INCORRECT AZAN AND SPEAKER VOLUME',
              text:
                'Reason for Incorrect Azan, its impact, solution, speaker volume. A non-Muslim boy winning Azan Competetion.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/JYuNKqlLExo',
                  urduText: 'سپیکر کی اونچی آواز',
                  hindiText: 'स्पीकर की ऊंची आवाज़',
                  englishText: 'Loud Speaker volume',
                },
                {
                  url: 'https://youtube.com/embed/lrBvB4OG_TA',
                  urduText: 'اذان بے سری اور غلط کیوں',
                  hindiText: 'अज़ान बेसुरी और गलता क्यों',
                  englishText: 'Why Azan is wrong and tunless',
                },
                {
                  url: 'https://youtube.com/embed/QPWVY_rYEzI',
                  urduText: 'غیر مسلم لڑکے نے اذان مقابلہ جیت لیا- سولاپور',
                  hindiText:
                    'गैर मुस्लिम लड़के ने जीता अज़ान कॉम्पेटेशन -शोलापुर',
                  englishText: 'Non-Muslim boy won Azan Competition -Solapur',
                },
                {
                  url: 'https://youtube.com/embed/EdbzK8iTjwE',
                  urduText: 'غلط اذان سننے کی اجازت نہیں ہے',
                  hindiText: 'गलत अज़ान सुनने की इजाज़त नहीं है',
                  englishText: 'It is not allowed to listen incorrect Azan',
                },
                {
                  url: 'https://youtube.com/embed/PfMbjwDdFzA',
                  urduText: 'شیخ زاید ابو ظبی اذان',
                  hindiText: 'शेख जायद मस्जिद -अबू धाबी अज़ान',
                  englishText: 'Shaikh Zayed Masjid -Abu Dhabi Azan',
                },
                {
                  url: 'https://youtube.com/embed/61oQvK6Rmgw',
                  urduText: 'اذان کے معنی',
                  hindiText: 'अज़ान का मतलब',
                  englishText: 'Azan meaning',
                },
                {
                  url: 'https://youtube.com/embed/b868szgrsAw',
                  urduText: 'اذان کیسے شروع ہوئی ؟',
                  hindiText: 'अज़ान कैसे शुरू हुई?',
                  englishText: 'How Azan started?',
                },
              ],
            },
          },
          {
            name: 'Destiny and Planning',
            content: {
              heading: 'DESTINY OR PLANING',
              text:
                // tslint:disable-next-line:max-line-length
                'Destiny Planners has been at the forefront of delivering exceptional digital assets for digital education & vertical business solutions with comprehensive focus on career planning, intelligence analysis, e-learning, & digital classrooms. With years of industry exposure, the team at Destiny Planners has partnered with the best to deliver result-oriented solutions & interactive technology blended with exceptional insight for students to excel in their career. We work with the best talent in the industry to provide business solutions with industry compliance & real-time analytics.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/g7_Mt6BoMo0',
                  urduText: 'تقدیر یا پلاننگ /تدبیر/منصوبہ بندی',
                  hindiText: 'तक़दीर और प्लानिंग/तदबीर/मंसूबा बंदी',
                  englishText: 'Destiny or planning?',
                },
                {
                  url: 'https://youtube.com/embed/fh9Es4uwG4g',
                  urduText: 'اسلام اور پلاننگ',
                  hindiText: 'इस्लाम और प्लानिंग',
                  englishText: 'Planning in Islam',
                },
                {
                  url: 'https://youtube.com/embed/sVsdBw0VG0U',
                  urduText: 'تقدیر کیا ہے؟ 3 سوالات',
                  hindiText: 'تقدیر کیا ہے؟ ٣ سوالات',
                  englishText: 'What Is Destiny? 3 questions',
                },
                {
                  url: 'https://youtube.com/embed/Lh7mSKaTO9M',
                  urduText:
                    'اگر سب کچھ قسمت میں ہے تو مزید تعلیم کیوں حاصل کریں؟',
                  hindiText: 'अगर सब कुछ तक़दीर से है तो आगे क्यों पढ़ें ?',
                  englishText: 'why to study more if everything is in luck?',
                },
                {
                  url: 'https://youtube.com/embed/x7reF7YHN6Q',
                  urduText: 'تقدیر اور ہدایات',
                  hindiText: 'तक़दीर और हिदायत',
                  englishText: 'Destiny and instructions',
                },
                {
                  url: 'https://youtube.com/embed/v6IlDV3cGgY',
                  urduText: 'پیش گوئی - انگریزی میں لیکچر',
                  hindiText: 'पेंशन गोई - अंग्रेजी में लेक्चर',
                  englishText: 'predetermination',
                },
                {
                  url: 'https://youtube.com/embed/-QqJIm_8hC0',
                  urduText: 'بہت سے کام کرنے ہیں لیکن ہم کرنا نہیں چاہتے ہیں',
                  hindiText:
                    'इतने सारे काम करने के लिए लेकिन हम नहीं करना चाहते हैं',
                  englishText: "So many things to do but we don't want to do",
                },
                {
                  url: 'https://youtube.com/embed/_PDKwmGtCbQ',
                  urduText: 'بوڑھاپے کے لئے پیسے جما کرنا کیسا ہے ؟',
                  hindiText: 'बुढ़ापे के लिए पैसे बचाना कैसा है?',
                  englishText: 'How about savings money for old age?',
                },
              ],
            },
          },
          {
            name: 'Khatme Nabuwat',
            content: {
              heading: 'LAST PROPHET ( KHATME NUBUWAT)',
              text: '',
              videosList: [
                {
                  url: 'https://youtube.com/embed/og3ygPic6zg',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Guidelines',
    children: [
      {
        name: 'Marriage Guidelines',
        children: [
          {
            name: 'Marriage Age',
            content: {
              heading: 'WHEN TO GET MARRIED',
              text:
                "A new study suggests that people should get married between the ages of 28 and 32 if they don't want to get divorced, at least in the first five yearssss",
              videosList: [
                {
                  url: 'https://youtube.com/embed/GEJwQXNijJE',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/IjhOT7HMvmU',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/3DAPlUrRhA0',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/pLvJlJ-f37A',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/Hi2LOpM8mW4',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
              ],
            },
          },
          {
            name: 'Wedding Preparation',
            content: {
              heading: 'MARRIAGE PREPARATION',
              text:
                // tslint:disable-next-line:max-line-length
                "Researchers found the \"right\" amount of time to date beforot as long as ye getting married — and it's nou'd think. A study found that waiting a bit to get married can decrease the likelihood you'll get divorced. Specifically, waiting three years or more decreases the likelihood of divorce by 50%.",
              videosList: [
                {
                  url: 'https://youtube.com/embed/e8LYc6CJMt8',
                  urduText: 'نکاح کی نیت',
                  hindiText: 'निकाह की नियत',
                  englishText: 'Intention of Nikah',
                },
                {
                  url: 'https://youtube.com/embed/LZvaV5UpPfM',
                  urduText: 'تحفہ دولہا کتاب',
                  hindiText: 'तोहफा दूल्हा किताब',
                  englishText: 'Tohfa e dulha book',
                },
                {
                  url: 'https://youtube.com/embed/q39bIe8NCpg',
                  urduText: 'تحفہ دلہن کتاب',
                  hindiText: 'तोहफा दुल्हन किताब',
                  englishText: 'Tohfa e dulhan book',
                },
                {
                  url: 'https://youtube.com/embed/QbGkdi8aJRY',
                  urduText: 'شادی سے پہلے جسمانی طور پر فٹ ہوجائیں',
                  hindiText: 'शादी से पहले शारीरिक रूप से फिट',
                  englishText: 'physically fit before marriage',
                },
                {
                  url: 'https://youtube.com/embed/rH2dMDX1mQo',
                  urduText: 'اسلام میں جنسی تعلیم',
                  hindiText: 'इस्लाम में सेक्स एजुकेशन (मालूमात )',
                  englishText: 'Sex Education in Islam',
                },
                {
                  url: 'https://youtube.com/embed/8ntpmvwu18A',
                  urduText: 'دولہا مہندی اور پھول پہنے ہوئے',
                  hindiText: 'मेहंदी और फूल पहनना दूल्हा',
                  englishText: 'Groom wearing Mehndi and Flowers',
                },
              ],
            },
          },
          {
            name: 'Right Life Partner',
            content: {
              heading: 'FIND RIGHT LIFE PARTNER',
              text:
                // tslint:disable-next-line:max-line-length
                'Take a test drive. ... Look for A. Religiousness B. Good Nature C. Compatibility D. Decent Family E. Reason F. Physical and Mental Health G. Whom can you Marry?someone who is kind and loving. ...',
              videosList: [
                {
                  url: 'https://youtube.com/embed/M4m8r-Z3l4k',
                  urduText: ',لڑکا لڑکی کی اجازت اور ایک دوسرے کو دیکھنا',
                  hindiText: 'लड़का लड़की की इजाज़त और एक बार दूसरे को देखना',
                  englishText: 'Boy/girl permission and seeing eachother',
                },
                {
                  url: 'https://youtube.com/embed/O6pMblvDhjk',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/Ge8i-CFIU10',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/-F-iQIJS-GA',
                  urduText: '',
                  hindiText: '',
                  englishText: '',
                },
                {
                  url: 'https://youtube.com/embed/zhY57pM1FQY',
                  urduText: 'استخارہ کرنے کا غلط طریقہ',
                  hindiText: 'इस्तेखार करने का गलत तरीक़ा',
                  englishText: 'Wrong way of doing istekhara',
                },
              ],
            },
          },
          {
            name: 'Engagement',
            content: {
              heading: 'ENGAGEMENT',
              text: 'engagement',
              videosList: [
                {
                  url: 'https://youtube.com/embed/9glfuJzc-Yc',
                  urduText: 'کیا منگنی کے بعد فون پر بات کرنا ٹھیک ہے؟',
                  hindiText: 'क्या मंगनी के बाद फोन पर बात करना ठीक है?',
                  englishText: 'Is it okay to talk on phone after engagement?',
                },
                {
                  url: 'https://youtube.com/embed/J8f_kXt-VXQ',
                  urduText: 'منگنی کے بعد بات/چیت کرنے کے نقصانات',
                  hindiText: 'मंगनी के बाद कॉल/चैटिंग करने का नुकसान',
                  englishText:
                    'Side effects of talking/chatting after engagement',
                },
              ],
            },
          },
          {
            name: 'Wedding Expenses',
            content: {
              heading: 'MARRIAGE EXPENSES',
              text: 'marriage expenses',
              videosList: [
                {
                  url: 'https://youtube.com/embed/eVvQQcbfqhU',
                  urduText: 'شادی کے اخراجات کو کم کرنے کے لئے پانچ نکات',
                  hindiText: 'शादी के खर्च को कम करने के लिए पांच पॉइंट',
                  englishText: 'five points to reduce marriage expenses',
                },
                {
                  url: 'https://youtube.com/embed/zW9sxFQRIAs',
                  urduText:
                    'مسلمان خواتین سڑک پر بھیک مانگتی ہیں اور ہم شادی میں رقم خرچ کرتے ہیں',
                  hindiText:
                    'मुस्लिम औरतें सड़क पर भिक मांग रही और हम शादी में फ़िज़ूल`खर्च`करते हैं',
                  englishText:
                    'Muslims are begging on streets and we are over expending',
                },
              ],
            },
          },
          {
            name: 'Dowry',
            content: {
              heading: 'DOWRY',
              text: 'dowry',
              videosList: [
                {
                  url: 'https://youtube.com/embed/THu4PH-Gfr0',
                  urduText: 'اسلام اور جہیز، حضرت فاطمتہ الزہرا کا جہیز',
                  hindiText: 'जहेज और इस्लाम। हज़रत फातिमा का जहेज़',
                  englishText: 'Dowry and Islam, dowry of Hazrat fatima',
                },
                {
                  url: 'https://youtube.com/embed/riq5Uo3SAiI',
                  urduText: 'حضرت فاطمتہ الزہرا کا جہیز',
                  hindiText: 'हज़रत फातिमा का जहेज़',
                  englishText: 'Dowry of Hazrat Fatima',
                },
                {
                  url: 'https://youtube.com/embed/5EAibs6ii5w',
                  urduText: 'زبردستی جہیز',
                  hindiText: 'जबरदस्ती दहेज',
                  englishText: 'forceful dowry',
                },
                {
                  url: 'https://youtube.com/embed/vsMnJEEL1mo',
                  urduText: 'جہیز کی موت',
                  hindiText: 'दहेज हत्या',
                  englishText: 'dowry death',
                },
              ],
            },
          },
          {
            name: 'Post Wedding Life',
            content: {
              heading: 'AFTER MARRIAGE',
              text:
                // tslint:disable-next-line:max-line-length
                '12 short videos. Supplication for first night. Prayer for first night. Halal Waleema. How to take bath. Staying Away from wife. 52 sexual knowledge points. Expending on wife. Good Wife. Joint family.What wife wants?Honeymoon.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/VpbE8p6ej9o',
                  urduText: 'پہلی رات کی دعا',
                  hindiText: 'पहली रात की दुआ',
                  englishText: 'First night supplication',
                },
                {
                  url: 'https://youtube.com/embed/gL18bOK8Te0',
                  urduText: 'پہلی رات کی نماز',
                  hindiText: 'पहली रात की नमाज़',
                  englishText: 'First night namaz',
                },
                {
                  url: 'https://youtube.com/embed/QdhBIGPei0s',
                  urduText: 'کیا ولیمہ کے لئے بی وی سے ہمیستری / سیکس ہے؟',
                  hindiText:
                    'क्या वलीमा करने के लिए बीवी से हमबिस्तरी/सेक्स ज़रूरी है?',
                  englishText:
                    'Is sexual intercourse necessary for reception/walima?',
                },
                {
                  url: 'https://youtube.com/embed/CwKVHFbrOsQ',
                  urduText: 'غسل کیسے کریں؟',
                  hindiText: 'नहाए कैसे?',
                  englishText: 'how to take bath?',
                },
                {
                  url: 'https://youtube.com/embed/RPFhTOyXdBE',
                  urduText:
                    'شوہر بیوی سے دور، سعودی/دوبی میں اور بیوی سسورال میں',
                  hindiText:
                    'शौहर बीवी से दूर सऊदी दुबई में और बीवी ससुराल में',
                  englishText:
                    'Husband away from wife, in Dubai and wife in sasural',
                },
                {
                  url: 'https://youtube.com/embed/Q_lxRRTTEl4',
                  urduText: 'ہمبستری کے ٥٢علمی پوائنٹس',
                  hindiText: 'हमबिस्तरी/सेक्स के ५२ इल्मी पॉइंट्स',
                  englishText: '52 Sexual knowledge points',
                },
                {
                  url: 'https://youtube.com/embed/SIQ-6qJoQuA',
                  urduText: 'بیوی پر پیسا خرچ کرنا',
                  hindiText: 'बीवी पर पैसा खर्च करना',
                  englishText: 'Spending money of Wife',
                },
                {
                  url: 'https://youtube.com/embed/7qN53Wzg-jw',
                  urduText: 'اچھی بیوی',
                  hindiText: 'अच्छी बीवी',
                  englishText: 'Good wife',
                },
                {
                  url: 'https://youtube.com/embed/g00A_qe4UTQ',
                  urduText: 'جوائنٹ فیملی سسٹم اور پردہ',
                  hindiText: 'ज्वाइंट फैमिली सिस्टम में पर्दा',
                  englishText: 'Join family system and pardah',
                },
                {
                  url: 'https://youtube.com/embed/FNUWuesO7c8',
                  urduText: 'بیوی کو شوہر سے کیا چاہیئے؟',
                  hindiText: 'बीवी को शोहर से क्या चाहिए?',
                  englishText: 'What wife wants from husband?',
                },
                {
                  url: 'https://youtube.com/embed/rCzboxAwjes',
                  urduText: 'اسلام میں ہنی مون',
                  hindiText: 'इस्लाम में हनीमून',
                  englishText: 'Honeymoon in Islam',
                },
              ],
            },
          },
          {
            name: 'Saas and Sasur',
            content: {
              heading: 'SAAS AND SASUR',
              text: 'saas and sasur',
              videosList: [
                {
                  url: 'https://youtube.com/embed/s6ZnG4PNyMk',
                  urduText: 'اسلامی اصطلاح میں ساس باہو',
                  hindiText: 'सास बहु इस्लामिक तारिख में',
                  englishText: 'Saas Bahu in islamic terminology',
                },
                {
                  url: 'https://youtube.com/embed/wlPRU_ZVNBM',
                  urduText: 'ساس بہو اور گوگل',
                  hindiText: 'सास बहू और गूगल',
                  englishText: 'Saas, bahu and Google',
                },
                {
                  url: 'https://youtube.com/embed/phvRtfOHCnk',
                  urduText: 'ساس بہو اور شیطان',
                  hindiText: 'सास बहू और शैतान',
                  englishText: 'Saas bahu and Shaitan',
                },
              ],
            },
          },
          {
            name: 'Husband and Wife Love',
            content: {
              heading: 'HUSBAND WIFE LOVE',
              text:
                'Expressing love, Prophet Mohammad (pbuh) and ideal husband, husband wife mistakes, 5 things to control wife, Love with husband,',
              videosList: [
                {
                  url: 'https://youtube.com/embed/YmbuvrrpRu4',
                  urduText: 'بیوی سے محبت کا اظہار کرنا',
                  hindiText: 'बीवी से प्यार का इजहार',
                  englishText: 'Expressing love to wife',
                },
                {
                  url: 'https://youtube.com/embed/PQmlZngZiBA',
                  urduText: 'کامل شوہر۔ محمد',
                  hindiText: 'द परफेक्ट हसबैंड - मुहम्मद',
                  englishText: 'The Perfect Husband - Muhammad',
                },
                {
                  url: 'https://youtube.com/embed/lzEbQIy3Ceg',
                  urduText: 'شوہر اور بیوی کی غلطیاں',
                  hindiText: 'शौहर और बीवी की गलती',
                  englishText: 'Mistakes of husband and wife',
                },
                {
                  url: 'https://youtube.com/embed/ppoXWwL938k',
                  urduText:
                    'یہ پانچ چیزیں کریں اپنی بیوی کو قابو میں کرنے کے لیے',
                  hindiText:
                    'ये पांच चीजें करें अपनी बीवी को कंट्रोल करने के लिए',
                  englishText: 'Do these 5 things to control your wife',
                },
                {
                  url: 'https://youtube.com/embed/_YWDlnqdurM',
                  urduText: 'شوہر کے ساتھ محبت',
                  hindiText: 'शौहर के साथ मोहब्बत',
                  englishText: 'Love with your husband',
                },
                {
                  url: 'https://youtube.com/embed/jEsBevnfAag',
                  urduText: 'اپنی فیملی کو اپنا پیار دیکھائیں',
                  hindiText: 'अपनी फैमिली को अपना प्यार दिखाएं',
                  englishText: 'Realize your love to your family',
                },
                {
                  url: 'https://youtube.com/embed/W-2F7QtXv_A',
                  urduText: 'شوہر کی بیوی سے محبت بڑھانے کا فارمولا',
                  hindiText: 'मियां बीवी के प्यार को बढ़ाने का नुस्खा',
                  englishText: 'Formula to increase husband wife love',
                },
                {
                  url: 'https://youtube.com/embed/N1g9LLXtZ6k',
                  urduText: 'بیوی کی ذمہ داری',
                  hindiText: 'एक बीवी की जिम्मेदारी',
                  englishText: 'Responsibility of a wife',
                },
                {
                  url: 'https://youtube.com/embed/B_dP1q7gamo',
                  urduText: 'میاں بیوی محبت کی چند باتیں',
                  hindiText: 'मियां बीवी मोहब्बत की चंद बातें',
                  englishText: 'Husband wife love tips',
                },
              ],
            },
          },
          {
            name: 'Court Involvment',
            content: {
              heading: 'AFTER MARRIAGE COURT CASES',
              text:
                // tslint:disable-next-line:max-line-length
                'You have two spouses: the one you have not divorced yet and the one you just married. ... Civil family laws treat the concept of bigamy somewhat differently; because your second marriage is illegal, it technically can not exist. You can still be prosecuted in criminal court, but you do not have to divorce to end the marriage.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/5s0qJVemxOM',
                  urduText: 'جھوٹے شادی عدالت کا مقدمہ کس طرح لڑنا ہے؟',
                  hindiText: 'झूठा विवाह कोर्ट का मुकदमा कैसे लड़ें?',
                  englishText: 'how to fight false marriage court case?',
                },
                {
                  url: 'https://youtube.com/embed/YmhSHLgd-wk',
                  urduText: 'اگر بیوی جھوٹے عدالت میں مقدمہ دائر کرتی ہے',
                  hindiText: 'अगर पत्नी झूठे कोर्ट केस दायर करती है',
                  englishText: 'if wife files false court case',
                },
                {
                  url: 'https://youtube.com/embed/_OBS4xMKRgI',
                  urduText: 'طلاق اور جہیز کے قانون کا غلط استعمال ہوا',
                  hindiText: 'तलाक और दहेज कानून का दुरुपयोग',
                  englishText: 'Divorce & Dowry Laws misused',
                },
                {
                  url: 'https://youtube.com/embed/xEu-ZlvvIl8',
                  urduText:
                    'بیوی نے جہیز کے جھوٹے معاملے میں کھینچنے کی دھمکی دی',
                  hindiText: 'पत्नी का झूठे दहेज के मामले में खींचने की धमकी',
                  englishText: 'Wife threatens to pull into false dowry case',
                },
              ],
            },
          },
          {
            name: 'Talaq and Khula',
            content: {
              heading: 'TALAQ AND KHULA',
              text:
                'Reasons, Does Allah like? No Love after love marriage,Effect on children, Talaq/Khula process. After Divorce',
              videosList: [
                {
                  url: 'https://youtube.com/embed/RfC-2LBIlHA',
                  urduText: 'طلاق کی دس وجوہات - ایک وکیل کے ذریعہ',
                  hindiText: 'तलाक के दस कारण - एक वकील द्वारा',
                  englishText: 'ten reasons for divorce - By an Advocate',
                },
                {
                  url: 'https://youtube.com/embed/Hurs0tY4dhI',
                  urduText: 'اللہ طلاق پسند نہیں کرتا',
                  hindiText: 'अल्लाह को तलाक पसंद नहीं है',
                  englishText: 'Allah does not like divorce',
                },
                {
                  url: 'https://youtube.com/embed/JnZUBvBIZ1g',
                  urduText: 'محبت کی شادی میں طلاق',
                  hindiText: 'प्रेम विवाह में तलाक',
                  englishText: 'divorce in Love marriage',
                },
                {
                  url: 'https://youtube.com/embed/p6RSqMl75HU',
                  urduText: 'بچوں پر طلاق کا اثر',
                  hindiText: 'बच्चों पर तलाक का असर',
                  englishText: 'Affect of divorce on children',
                },
                {
                  url: 'https://youtube.com/embed/7bBUVumTeY8',
                  urduText: 'طلاق کی وجوہات',
                  hindiText: 'तलाक का कारण',
                  englishText: 'Reasons for divorce',
                },
                {
                  url: 'https://youtube.com/embed/3fhmFmtuyM8',
                  urduText: 'طلاق دینے کا طریقہ',
                  hindiText: 'तलाक कैसे दें',
                  englishText: 'how to give divorce',
                },
                {
                  url: 'https://youtube.com/embed/NA0jMgJ-NvY',
                  urduText: 'طلاق شودہ کی شادی',
                  hindiText: 'तलाकशुदा का विवाह',
                  englishText: 'marraige of divorcee',
                },
                {
                  url: 'https://youtube.com/embed/n_r5PM1sn4I',
                  urduText: 'طلاق شودہ / بیوا کے ساتھ نکاح',
                  hindiText: 'तालाक-शुदा / बेवा के साथ शादी',
                  englishText: 'Marriage with Talaq-shuda/Bewa',
                },
              ],
            },
          },
          {
            name: 'Husband and wife fighting',
            content: {
              heading: '',
              text: '',
              videosList: [
                {
                  url: 'https://youtube.com/embed/eI2g3OpbtfE',
                  urduText: 'وہ کام جو شیطان کو پسند کرتا ہے',
                  hindiText: 'वह काम जो शैतान को सबसे ज़्यदा पसंद है',
                  englishText:
                    'the act which is most lovable to Satan (Shaitan)',
                },
                {
                  url: 'https://youtube.com/embed/GxqF7v2_wng',
                  urduText: 'شوہر بیوی لڑائی',
                  hindiText: 'पति पत्नी की लड़ाई',
                  englishText: 'husband wife fight',
                },
                {
                  url: 'https://youtube.com/embed/AAzdAKFFnFU',
                  urduText: 'شادی کے بعد برداشت کرنا سیکھو',
                  hindiText: 'शादी के बाद बर्दाश्त करना सीखें',
                  englishText: 'Learn how to compromise after marriage',
                },
                {
                  url: 'https://youtube.com/embed/AvZFDCwqcsk',
                  urduText: 'عورتیں عورتوں کی دشمن ہیں',
                  hindiText: 'औरतें ही औरतों की दुश्मन हैं',
                  englishText: 'Women is enemy of women',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Parenting Guidelines',
        children: [
          {
            name: 'Upto 5 years',
            content: {
              heading: 'PARENTING GUIDLINES - NEWBORN TO 5 YEARS OLD',
              text:
                // tslint:disable-next-line:max-line-length
                'Newborn baby - Things to do and not to do. Keeping name and circumcision, Black Threads, Aqeeqa,Massage, Birthday,When kid starts talking, cleanliness, schooling age.',
              videosList: [
                {
                  url: 'https://youtube.com/embed/rnRpN0zK67M',
                  urduText:
                    'بچے کی پیدائش کے بعد کرنے کے کام اور کچھ نہ کرنے کے کام',
                  hindiText:
                    'बच्चे की पैदा होने के बाद कुछ करने और कुछ नहीं करने के काम',
                  englishText:
                    'Few things to do and not to do after baby is born',
                },
                {
                  url: 'https://youtube.com/embed/m_ykOaAUsAI',
                  urduText: 'نام رکھنے میں تاخیر',
                  hindiText: 'नाम रखने में देरी',
                  englishText: 'Delay in keeping name',
                },
                {
                  url: 'https://youtube.com/embed/FThmp4CB9-o',
                  urduText: 'ختنہ کرنے میں دری کرنا',
                  hindiText: 'खतना में देरी करना',
                  englishText: 'Delay in circumcision',
                },
                {
                  url: 'https://youtube.com/embed/2I3szEHnUUs',
                  urduText: 'کالے دھاگے اور اسلام',
                  hindiText: 'काले धागे और इस्लाम',
                  englishText: 'Black thread and islam',
                },
                {
                  url: 'https://youtube.com/embed/p0ZW-LpGX2o',
                  urduText: 'عقیقہ کے مسایل',
                  hindiText: 'अक़ीक़ा के मसाएल',
                  englishText: 'Aqiqa Rules and Regulations',
                },
                {
                  url: 'https://youtube.com/embed/FkArTpO_5As',
                  urduText: 'بچے کا مساج',
                  hindiText: 'बच्चे की मालिश',
                  englishText: 'Baby massage',
                },
                {
                  url: 'https://youtube.com/embed/_HH66kHF5-Q',
                  urduText: 'اسلام میں برتھ ڈے منانا',
                  hindiText: 'इस्लाम में बिर्थ डे मानना',
                  englishText: 'Birthday in islam',
                },
                {
                  url: 'https://youtube.com/embed/L8N20Jedepw',
                  urduText: 'عورتوں کے لئے بیان- اسلام میں برتھ ڈے منانا',
                  hindiText: 'इस्लाम में बिर्थ डे मानना - औरतों के लिए बयान',
                  englishText:
                    'Celebrating birth day in islam - Lecture for women',
                },
                {
                  url: 'https://youtube.com/embed/jMPsxzopFb0',
                  urduText: 'جب بچہ بولنا سیکھے',
                  hindiText: 'जब बच्चा बोलना सीखे',
                  englishText: 'When kid starts talking',
                },
                {
                  url: 'https://youtube.com/embed/VXam8VG8jT0',
                  urduText: 'بچوں کو صفائی کے یہ دس باتیں سکھائیں',
                  hindiText: 'बच्चों को सफाई के यह दस बातें सिखाएं',
                  englishText: 'Ten points kids hygiene',
                },
                {
                  url: 'https://youtube.com/embed/4IP4lry0IYU',
                  urduText: 'کلمہ سیکھانے کے بعد کیا سیکھایں',
                  hindiText: 'कलमा सिखाने के बाद क्या सिखाएं?',
                  englishText: 'What to teach after Kalima?',
                },
                {
                  url: 'https://youtube.com/embed/UZFh7bP3YHM',
                  urduText: 'قرآن حفظ کی امر اور اسکول میں کب ڈالیں',
                  hindiText:
                    'हिफ़्ज़ के लिए सबसे अच्छी उम्र। स्कूल में कब डालें ?',
                  englishText: 'Best age for hifz. when to put in school?',
                },
              ],
            },
          },
          {
            name: '5 to 10 years',
            content: {
              heading: 'PARENTING GUIDELINES - 5 TO 10 YEARS OLD',
              text:
                'Teach Quran, Teaching thank you-sorry, Children fight, how children learn saying lie. Bad friendship, 4 psychological points , Taking children to Masjid and how to teach them pray, dont make children dependent, Islamic Sports',
              videosList: [
                {
                  url: 'https://youtube.com/embed/BycnUq1UO5o',
                  urduText:
                    'اپنے بچوں کو قرآن سیکھاو۔ صرف پڑھنا نہیں بلکہ سمجھنا بھی۔',
                  hindiText:
                    'अपने बच्चों को क़ुरआन सिखाओ। सिर्फ पढ़ना नहीं बलके समझना भी',
                  englishText:
                    'Teach your children Quran. Not only only reading but understanding also',
                },
                {
                  url: 'https://youtube.com/embed/LtdJkutzTf0',
                  urduText:
                    'اپنے بچوں کو شکریہ ادا کرنا سکھائیں اور غلطی پر معافی مانگنا بھی سیکھایں',
                  hindiText:
                    'अपने बच्चों को शुक्रिया अदा करना सिखाएं और गलती पर माफी मांगना सिखाएं',
                  englishText:
                    'Teach your children to thank and say sorry for mistakes',
                },
                {
                  url: 'https://youtube.com/embed/mlPbwd5Xo34',
                  urduText: 'بچوں کے جھگڑے اور انکی پڑھائی کو لے کر سنجیدہ',
                  hindiText: 'बच्चों के झडगे और पढ़ाई को के कर संजीदा',
                  englishText:
                    'Kids fight and taking their education sereiesly',
                },
                {
                  url: 'https://youtube.com/embed/Lpw9hgqKNTU',
                  urduText: 'بچے ماں باپ سے جھوٹ بولنا سیکھتے ہیں',
                  hindiText: 'बच्चे मां बाप से झूठ बोलना सीखते हैं',
                  englishText: 'Kids learn saying lie from parent',
                },
                {
                  url: 'https://youtube.com/embed/R_WmF-S1jTk',
                  urduText: 'بورے دوست کا اثر',
                  hindiText: 'बुरे दोस्त का असर',
                  englishText: 'Impact of bad friends',
                },
                {
                  url: 'https://youtube.com/embed/JcpEJ8AxS0Y',
                  urduText:
                    'آپکے بچوں میں کونفیڈنس /خود اعتمادی پیدا کرنے کے 4 باتیں',
                  hindiText:
                    'आपके बच्चे में कॉन्फिडेंट पैदा करने के लिए ४ बातें',
                  englishText: '4 points to build confidence in your kid',
                },
                {
                  url: 'https://youtube.com/embed/P5e_2qHngDo',
                  urduText: 'بچوں کے ساتھ مسجد میں کیسے پیش آئیں',
                  hindiText: 'बच्चों के साथ मस्जिद में कैसे पेश आएं',
                  englishText: 'How to behave with children in Masjid',
                },
                {
                  url: 'https://youtube.com/embed/T-PwH_skGJY',
                  urduText: 'بچوں میں نماز کی عادت کیسے ڈالیں',
                  hindiText: 'बच्चों को नमाज़ का आदत कैसे डालें',
                  englishText: 'How to make your kid pray namaz',
                },
                {
                  url: 'https://youtube.com/embed/xUAlkm8EQtA',
                  urduText:
                    'اپنے بچوں کو کسی پر مجبور نہ بنائیں - ماؤں کے لئے ویڈیو',
                  hindiText:
                    'अपने बच्चों को किसी का मजबूर न बनायें - माँओ के लिए वीडियो',
                  englishText:
                    'dont make your child dependant - video for mothers',
                },
                {
                  url: 'https://youtube.com/embed/USaghYToq4Q',
                  urduText: 'باپ بیٹا خوبصورتی سے قرآن پڑھ رہے',
                  hindiText: 'बाप बेटा खूबसूरती से क़ुरान पढ़ रहे',
                  englishText: 'Father and son reciting Quran beautifully',
                },
                {
                  url: 'https://youtube.com/embed/Xu9UcOXDavg',
                  urduText: 'اسلامی کھیل',
                  hindiText: 'इस्लामी खेल',
                  englishText: 'Islamic sports',
                },
                {
                  url: 'https://youtube.com/embed/beyXCWqMkNE',
                  urduText: 'اسلامی شریعت کے مطابق کونسا کھیل جائز ہے؟',
                  hindiText: 'इस्लामिक शरीयत के मुताबिक़ कौन सा खेल जाइज़ है?',
                  englishText: 'Which sports is legal as per islamic shariah?',
                },
              ],
            },
          },
          {
            name: '10 to 20 years',
            content: {
              heading: 'PARENTING GUIDELINES - 10 TO 20 YEARS OLD',
              text:
                'Parents behavior, What after 10th/12th, 4 problems of teenagers (10-20 years), become friend of your own son/daughter,Planning for life, Monitor their internet activity, Teenager Military commander Sahabi, Puberty and how to take bath',
              videosList: [
                {
                  url: 'https://youtube.com/embed/6j_BudpvqFo',
                  urduText: 'دس سال سے زیادہ عمر کے بچوں کے لئے والدین کا طرز',
                  hindiText: '10 साल की उम्र से बच्चों के लिए पेरेंटिंग स्टाइल',
                  englishText: 'Parenting style for kids from 10 years old',
                },
                {
                  url: 'https://youtube.com/embed/nba9rzUWY14',
                  urduText: 'دسویں /برا ویں کے نتائج کے بعد کیا ؟',
                  hindiText: '10 वीं / 12 वीं के बाद क्या?',
                  englishText: 'What after 10th/12th result?',
                },
                {
                  url: 'https://youtube.com/embed/r37isQ2qFvU',
                  urduText: 'دس سےبیس سال کے بچوں کے چار مسایل',
                  hindiText: 'दस से बीस साल के बच्चों के चार मसले',
                  englishText: 'how to deal with 4 problems in teenagers?',
                },
                {
                  url: 'https://youtube.com/embed/M9TiF_ICyl0',
                  urduText: 'اپنے بچے کا دوست بنیں',
                  hindiText: 'अपने खुद के बच्चे के दोस्त बनें',
                  englishText: 'Become friend of your own child',
                },
                {
                  url: 'https://youtube.com/embed/-QqJIm_8hC0',
                  urduText: 'زندگی کی منصوبہ بندی کب شروع کریں؟',
                  hindiText: 'अपने ज़िन्दगी की प्लानिंग कब शुरू करें?',
                  englishText: 'When to start life planning?',
                },
                {
                  url: 'https://youtube.com/embed/55KjRZK-xYg',
                  urduText:
                    'اپنے بچے کی انٹرنیٹ / موبائل کاموں کی نگرانی کیسے کریں',
                  hindiText:
                    'अपने बच्चे की इंटरनेट / मोबाइल गतिविधि की निगरानी कैसे करें',
                  englishText:
                    'How to monitor internet/mobile activity of your child',
                },
                {
                  url: 'https://youtube.com/embed/HYDVOaMoY6Q',
                  urduText: 'تین نوجوان صحابی',
                  hindiText: 'तीन नौजवान सहाबी',
                  englishText: 'Three Teenager sahabi',
                },
                {
                  url: 'https://youtube.com/embed/CwKVHFbrOsQ',
                  urduText: 'بچہ بالغ/بڑا کب ہوتا ہے ؟اور غسل کیسے کریں؟',
                  hindiText: 'बच्चा बालिग़/बड़ा कब होता है? और स्नान कैसे करें?',
                  englishText:
                    'When the kid becomes adult? and how to take bath?',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Special Messages',
    children: [
      {
        name: 'To Ulama',
        content: {
          heading: 'SPECIAL MESSAGE TO ULAMA',
          text:
            // tslint:disable-next-line:max-line-length
            'Responsibility of Ulama. Decide topic for lecture carefully with pure intentions. and dont to these ten mistakes. Correct the misconception about understanding of Quran in people. few maktab teaching guidelines.',
          videosList: [
            {
              url: 'https://youtube.com/embed/Ww_6tDq6po4',
              urduText: 'لوگوں کے مابین تنازعہ حل کرنے کو ترجیح دیں',
              hindiText: 'लोगों के बीच झाड़गे को सुलझाने को तरजीह दें',
              englishText: 'give priority to solving dispute between people',
            },
            {
              url: 'https://youtube.com/embed/fbydRpjJVgU',
              urduText:
                'بیان کا عنوان لوگوں کیضرورت کے مطابق منتخب کریں اور خالص نیت سےبیان کریں',
              hindiText:
                'बयान का टॉपिक लोगों की ज़रुरत के मुताबिक़ और सही नियत से बयान करें',
              englishText:
                'Select topic relevant to people with pure intention',
            },
            {
              url: 'https://youtube.com/embed/4XoVwamdUVQ',
              urduText:
                'لوگ اپنے مسایل علماء کے سامنے رکھنے سے ڈرتے ہیں .علماء کو چاہیے کے وہ لوگوں پر غصّہ نہ ہو',
              hindiText:
                'लोग अपने मसाएल उलेमा से सामने रखने से डरते हैं. उलेमा को चाहिए के वह लोगों पर गुस्सा न हो',
              englishText:
                "People fear to keep problems in front of Ulema. please don't be angry on them",
            },
            {
              url: 'https://youtube.com/embed/3yMroj8UEHo',
              urduText: 'بیان میں یہ دس غلطیاں نہ کریں۔',
              hindiText: 'बयान में ये दस गलतियाँ न करें।',
              englishText: "Don't do these ten mistakes in sermon.",
            },
            {
              url: 'https://youtube.com/embed/7hCQGmPYtfs',
              urduText:
                'دعوت تبلیغ کا مقصد یہ ہے کہ کوئی ایک فرد بھی اپنے شعبے کے علم سے جاہل نہیں رہا',
              hindiText:
                'दावत तब्लीग का मकसद यह है कि कोई भी आदमी को अपने शोबे के इल्म से जाहिल न रहे',
              englishText:
                'Purpose of Dawat Tabligh is that not a single person should remain illiterate from knowledge of his section',
            },
            {
              url: 'https://youtube.com/embed/Tzfl9aVfZow',
              urduText: 'علمائے کرام لوگوں کو قرآن کو سمجھنے کے لئے بتائیں',
              hindiText: 'उलेमा को लोगों को कुरान समझने के लिए कहना चाहिए',
              englishText: 'Ulema should tell people to understand Quran',
            },
            {
              url: 'https://youtube.com/embed/ecMa6YjQqmo',
              urduText:
                'امام کو ہر نماز سے پہلے لوگوں کی نماز درست کرنی چاہئے۔ اجتماعی اور انفرادی طور پر',
              hindiText:
                'इमाम को हर नमाज़ से पहले लोगों की नमाज़ को सही करना चाहिए। सब के सामने और अकेले भी',
              englishText:
                "imam should correct people's prayer before every prayer. collectively and individually",
            },
            {
              url: 'https://youtube.com/embed/870cZSI-Oug',
              urduText: 'ذہین اور کمزور بچوں کو مکاتب میں پڑھانے کا انداز',
              hindiText:
                'होशियार और कमजोर बच्चों के लिए मकतब में पढ़ने की तरतीब',
              englishText:
                'Teaching style in maktab to intelligent and weak children',
            },
            {
              url: 'https://youtube.com/embed/AtxvsJ8Snkc',
              urduText:
                'علمائے کرام کو نہ صرف عام متنازعہ عنوانات کے بارے میں ، بلکہ معاشرے کے تمام شعبوں کی ذمہ داری بتانا چاہئے',
              hindiText:
                'उलेमा को उम्मत के सभी शोबों की जिम्मेदारी बतानी चाहिए, न कि सिर्फ आम मुतनाज़ा टॉपिक्स के बारे में',
              englishText:
                'Ulema should tell responsibility of all sects of society, not only about common disputed topics',
            },
            {
              url: 'https://youtube.com/embed/x3n43uz4vYI',
              urduText: 'مسجد نبوی میں کیا ہوتا تھا؟',
              hindiText: 'मस्जिद नबावी में क्या हुआ करता था?',
              englishText: 'What used to happen in Masjid Nabawi?',
            },
            {
              url: 'https://youtube.com/embed/_oQ99x8V4aE',
              urduText:
                'عالم وہ نہیں جو صرف فقہی علم(روزہ،نماز وغیرہ ) کی تعلیم دیتا ہے',
              hindiText:
                'आलिम वह नहीं है जो सिर्फ फिक़ी (रोज़ा, नमाज़ वगेरा) मसले सिखाता है',
              englishText:
                'Alim is not the one who only teaches Fiqhi (Prayer and Fast etc) knowledge',
            },
          ],
        },
      },
      {
        name: 'To Doctors',
        content: {
          heading: 'SPECIAL MESSAGE TO MUSLIM DOCTORS',
          text:
            'Intentions, free service, history, guidelines and responsibility',
          videosList: [
            {
              url: 'https://youtube.com/embed/P5g-bH8cBIE',
              urduText: '',
              hindiText: '',
              englishText: 'Life and intention of a Muslim doctor',
            },
            {
              url: 'https://youtube.com/embed/RRFR7lKLsFs',
              urduText: '',
              hindiText: '',
              englishText: 'Free hospital run by Muslim doctors in America',
            },
            {
              url: 'https://youtube.com/embed/KG3tWqSIMIE',
              urduText: '',
              hindiText: '',
              englishText: 'Muslim doctors association',
            },
            {
              url: 'https://youtube.com/embed/aW2jT3Uf_D4',
              urduText: '',
              hindiText: '',
              englishText: 'Few Doctor patient communication tips',
            },
            {
              url: 'https://youtube.com/embed/_1-hMCViKD0',
              urduText: 'دنیا کا پہلا اسپتال',
              hindiText: 'दुनिया में पहला अस्पताल',
              englishText: 'First Hospital in the world',
            },
            {
              url: 'https://youtube.com/embed/QZAV1QuIfgc',
              urduText: 'علمائے کرام کے بعد ، معاشرے کے ذمہ دار کون ہیں؟',
              hindiText: 'उलमा के बाद, उम्मत के जिम्मेदार कौन हैं?',
              englishText: 'After Ulama, who are responsible of community?',
            },
          ],
        },
      },
      {
        name: 'To Engineers',
        content: {
          heading: 'ENGINEER',
          text: 'Engineer',
          videosList: [
            {
              url: 'https://youtube.com/embed/x_5fwIiwC-M',
              urduText: '',
              hindiText: '',
              englishText:
                'Not only about job, do engineering for society also',
            },
            {
              url: 'https://youtube.com/embed/XdBva9asg_o',
              urduText: '',
              hindiText: '',
              englishText: 'Role of engineering in developing of the country',
            },
            {
              url: 'https://youtube.com/embed/GG_E36CuLK4',
              urduText: '',
              hindiText: '',
              englishText: 'A case study for responsibility of an engineer',
            },
          ],
        },
      },
      {
        name: 'To Lawyers',
        content: {
          heading: 'ESPECIAL MESSAGE TO MUSLIM LAWYERS',
          text:
            'Contribution in justice in society. few qualities of good lawyer. Maulana Tariq jameel speech in lawyers.',
          videosList: [
            {
              url: 'https://youtube.com/embed/NYSLIjAHp6I',
              urduText: 'معاشرے میں انصاف میں وکیل کی شراکت',
              hindiText: 'समाज में इंसाफ में वकील का योगदान',
              englishText: 'Contribution of lawyer in justice in society',
            },
            {
              url: 'https://youtube.com/embed/wRxrOOg6xMA',
              urduText: 'ایک آچھے وکیل کے دس صفات',
              hindiText: 'एक अच्छे वकील के दस क्वालिटी',
              englishText: 'Tell qualities of a good lawyer',
            },
            {
              url: 'https://youtube.com/embed/1hk9qPN7N94',
              urduText: 'ایک وکیل کی پندرہ ذمہ داریاں',
              hindiText: 'एक वकील की १५ ज़िम्मेदारियां',
              englishText: '15 duties of a lawyer',
            },
            {
              url: 'https://youtube.com/embed/z4mbd4nNKZU',
              urduText: 'مولانا طارق جمیل بیان وکلاء میں',
              hindiText: 'मौलाना तारिक़ जमील बयान वकीलों में',
              englishText: 'Maulana Tariq Jameel lecture in lawyer',
            },
          ],
        },
      },
      {
        name: 'To Teachers',
        content: {
          heading: 'MESSAGE TO MUSLIMS TEACHERS',
          text:
            'Quality of Good teacher. Prophetic qualities of teaching. Impact of voice tone. Use of technology and smart class',
          videosList: [
            {
              url: 'https://youtube.com/embed/Gkgo_jRoPwk',
              urduText: 'اچھا استاد کون ہے؟',
              hindiText: 'अच्छा टीचर कौन होता है?',
              englishText: 'Who is good teacher?',
            },
            {
              url: 'https://youtube.com/embed/tXcitZXRtps',
              urduText:
                'اللّٰہ کے نبی صلی اللہ علیہ وسلم ایک ٹیچر کے طور پر - مسلم لیڈی ٹیچر کے لئے لیکچر',
              hindiText: '',
              englishText:
                'Teaching strategies of prophet Muhammad - lecture for ladies teacher',
            },
            {
              url: 'https://youtube.com/embed/sRuzHC0Rrcw',
              urduText: 'اداس استاد کا بچوں پر اثر',
              hindiText: 'उदास टीचर का बच्चों पर असर',
              englishText: 'Effect of Sad Teacher',
            },
            {
              url: 'https://youtube.com/embed/vUJWDA3tEuM',
              urduText: 'آواز کا اثر',
              hindiText: 'आवाज़ का असर',
              englishText: 'effect of voice tone',
            },
            {
              url: 'https://youtube.com/embed/iiFpHvhXb7c',
              urduText: 'ٹیچنگ میں ٹکنالوجی کا استعمال کریں',
              hindiText: 'टीचिंग में टेक्नोलॉजी का इस्तेमाल करें',
              englishText: 'Use Technology in Teaching',
            },
            {
              url: 'https://youtube.com/embed/_ONxnakehmk',
              urduText: 'اسمارٹ کلاس کیا ہے؟',
              hindiText: 'स्मार्ट क्लास क्या है?',
              englishText: 'What is smart class?',
            },
          ],
        },
      },
      {
        name: 'To Buisnessmen',
        content: {
          heading: 'BUISNESSMAN',
          text: 'Buisnessman',
          videosList: [
            {
              url: 'https://youtube.com/embed/i_OAzpdC_H8',
              urduText: 'غیر مسلم اسلامی تعلیم کی پابندی کرکے کامیاب ہوتے ہوئے',
              hindiText:
                'गैर मुस्लिम इस्लामी कानून का पालन करके कामयाब बनते हुवे',
              englishText:
                'Non Muslim following Islamic values to become successful',
            },
          ],
        },
      },
      {
        name: 'To Butchers',
        content: {
          heading: 'BUTCHERS(QUERSHI)',
          text: 'Butchers(Quershi)',
          videosList: [],
        },
      },
      {
        name: 'To Masjid Trustee',
        content: {
          heading: 'SPECIAL MESSAGE TO MASJID TRUSTEE',
          text:
            'Criteria to be Masjid Trustee. What should happen in Masjid. Situation of present Imam & Trustee and Masjid Chanda',
          videosList: [
            {
              url: 'https://youtube.com/embed/2yTSaQFk3mA',
              urduText: 'کون مسجد کمیٹی / ٹرسٹی کا حصہ بننا چاہئے',
              hindiText: 'मस्जिद कमेटी / ट्रस्टी का मेंबर कौन होना चाहिए',
              englishText: 'Who should be part of Masjid Committee/Trustee',
            },
            {
              url: 'https://youtube.com/embed/n0CA2LebIow',
              urduText: 'ون مسجد تحریک - مسجد میں کیا ہونا چاہئے',
              hindiText: 'वन मस्जिद तहरीक - मस्जिद में क्या होना चाहिए',
              englishText: 'One Masjid Movement - What should happen in Masjid',
            },
            {
              url: 'https://youtube.com/embed/neRXVnjngoU',
              urduText: 'مسجد میں ٥ وقت نماز کے علاوہ اور کیا ہونا چاہیے',
              hindiText:
                '5 मर्तबा नमाज के अलावा और मस्जिद में क्या होना चाहिए?',
              englishText:
                'What should happen in Masjid apart from 5 times namaz?',
            },
            {
              url: 'https://youtube.com/embed/j3hMG0lQXac',
              urduText: 'مسجد امام۔ غلام کی طرح برتاؤ کیوں؟',
              hindiText: 'मस्जिद इमाम। गुलामों जैसा बर्ताव क्यों?',
              englishText: 'Masjid Imam. why behave like slave?',
            },
            {
              url: 'https://youtube.com/embed/4UcxGvjxBLI',
              urduText: 'مسجد چندا کا غلط استعمال',
              hindiText: 'मस्जिद चंदा का गलत इस्तेमाल',
              englishText: 'Misuse of Masjid Chanda',
            },
            {
              url: 'https://youtube.com/embed/ynaahuYraro',
              urduText: 'مسجد میں خواتین کے نماز کا کمرہ',
              hindiText: 'मस्जिद में लेडीज़ नमाज़ रूम',
              englishText: 'Ladies Prayers Room in Masjid',
            },
            {
              url: 'https://youtube.com/embed/xV2UvtoHf1s',
              urduText: 'امام و مسجد کمیٹی - مسائل و فرائض',
              hindiText: 'इमाम और मस्जिद कमिटी - गलतियां और ज़िम्मेदारी',
              englishText: 'Imam & Masjid Committee - Problems & Duties',
            },
            {
              url: 'https://youtube.com/embed/Huj1s7fRBB4',
              urduText:
                'غیر ملکی تبلیغی جماعت اور ہندوستانی گندے وضو خانہ اور ٹوائلٹ',
              hindiText:
                'बहार मुल्क की तब्लीगी जमात और भारतीय गंदे वुज़ू खान और टॉयलेट',
              englishText:
                'Foreign tablighi jamat and indian dirty wuzu khana and toilet',
            },
            {
              url: 'https://youtube.com/embed/EtbWR69ueeA',
              urduText: 'مسجد چندا کے بارے میں اسلامی احکام - زبردستی چندہ',
              hindiText:
                'मस्जिद चंदा के बारे में इस्लामी हिदायत -ज़बरदस्ती चंदा',
              englishText:
                'Islamic ruling about Masjid Chanda - Forceful Chanda/Charity',
            },
            {
              url: 'https://youtube.com/embed/ni8FqjrqypA',
              urduText: 'مسجد چندہ کہاں استعمال نہیں ہوسکتا؟',
              hindiText: 'मस्जिद चन्दा का इस्तमाल कहाँ नहीं किया जा सकता है?',
              englishText: 'Where Masjid chanda can not be used?',
            },
            {
              url: 'https://youtube.com/embed/x3n43uz4vYI',
              urduText: 'مسجد نبوی میں کیا ہوتا تھا؟',
              hindiText: 'मस्जिद नबावी में क्या हुआ करता था?',
              englishText: 'What used to happen in Masjid Nabawi?',
            },
            {
              url: 'https://youtube.com/embed/E5QnJb9LBxM',
              urduText:
                'مساجد ویران کیوں؟ سماج کی ضرورت۔ مسجد میں کرنے کے بیس کام اور جمعہ بیان کے بیس عنوان',
              hindiText:
                'मस्जिद वीरान क्यूं? समाज की जरूरत। मस्जिद में करने के २० काम और २० जुमा बयान टॉपिक',
              englishText:
                'Why Masjid is empty? Society requirements. 20 things to do and 29 Juma byan topics',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Special Occasions',
    children: [
      {
        name: 'Eid ul-Fitr',
        content: {
          heading: 'EID -UL - FITR',
          text: 'eid -ul - fitr',
          videosList: [
            {
              url: 'https://youtube.com/embed/xsUglChIk5E',
              urduText:
                'رمضان المبارک میں آٹوفیگی (خود کھانے) کا تصور اور روزہ',
              hindiText: 'ऑटोफैगी (खुद को खाना )और रोज़ा रमजान में',
              englishText:
                'Autophagy (Self Eating) Concept & Fasting in Ramadan',
            },
            {
              url: 'https://youtube.com/embed/f_kUHUSIWD8',
              urduText:
                'مختلف ممالک میں روزہ کی مدت ، سب سے طویل اور مختصر ترین روزہ',
              hindiText:
                'दूसरे देशों में रमजान के रोज़े की लम्बाई , सबसे लंबी और सबसे छोटी रोज़ा',
              englishText:
                'Duration of Fast in Different Countries, Longest and Shortest Fast',
            },
            {
              url: 'https://youtube.com/embed/ZnepcYOK26U',
              urduText: 'رمضان کے بعد خالی مسجد کیوں؟',
              hindiText: 'रमजान के बाद खाली मस्जिद क्यों?',
              englishText: 'Empty Masjid After Ramadan why ?',
            },
          ],
        },
      },
      {
        name: 'Eid Ul-Adha',
        content: {
          heading: 'EID UL ADHA',
          text:
            'How to slaughter and supplication, Respect the animal, few misconceptions about 3 divisions, Prohibited parts in Halal Animal, cleanliness',
          videosList: [
            {
              url: 'https://youtube.com/embed/FMQDWv6j8x0',
              urduText: 'جانور زبح کرنے کا طریقہ، دعا اور ضروری باتیں',
              hindiText: 'जानवर जबाह कैसे करें? कौनसी दुआ पढ़ें? ज़रूरी हिदायत',
              englishText: "How to slaughter? What's duwa? And best practices.",
            },
            {
              url: 'https://youtube.com/embed/BX1CavhAzME',
              urduText: 'قربانی کے جانور کے ساتھ کیسے برتاو کریں',
              hindiText: 'क़ुरबानी के जानवर के साथ कैसे बर्ताव करें',
              englishText: 'how to treat animal to be scarified?',
            },
            {
              url: 'https://youtube.com/embed/oSxB847HHRo',
              urduText:
                'کیا ایک حصہ گوشت میں تین حصے کرنا ضروری ہے؟ رشتے دار، غریب اور خود کے لیے؟',
              hindiText:
                'क्या एक हिस्सा गोश्त को तीन हिस्सों में तकसीम करना ज़रूरी है? रिश्तेदार,गरीब और खुद के लिए?',
              englishText:
                'Is it necessary to divide one part further into three parts for relative, poor and for self?',
            },
            {
              url: 'https://youtube.com/embed/Hs3YXSJPgRE',
              urduText: 'حلال جانور میں حرام چیزیں',
              hindiText: 'हलाह जानवर में हराम चीज़ें',
              englishText: 'Haram things in halal animal',
            },
            {
              url: 'https://youtube.com/embed/184o76F5pxY',
              urduText: 'عید کے وقت صفایی',
              hindiText: 'ईद के मौके पर सफाई',
              englishText: 'Cleanilness in Eid',
            },
            {
              url: 'https://youtube.com/embed/ndgn6xFnqRA',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
          ],
        },
      },
      {
        name: 'Milad un Nabi',
        content: {
          heading: 'MILAD',
          text: 'milad',
          videosList: [],
        },
      },
      {
        name: 'Moharram',
        content: {
          heading: 'MUHARRAM',
          text: 'muharram',
          videosList: [],
        },
      },
      {
        name: 'Salatul Istisqa',
        content: {
          heading: 'EID',
          text: 'eid',
          videosList: [],
        },
      },
      {
        name: 'haj and Umrah',
        content: {
          heading: 'HAJ AND UMRAH',
          text: 'haj',
          videosList: [
            {
              url: 'https://youtube.com/embed/48SaU6ii8y4',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/MtiqtS8ZuT0',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/ktfcnODA6fY',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/nalGPSstibw',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/cWNXYBGu6NU',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/csMshbk5i6g',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/JV36wAFMBXI',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
          ],
        },
      },
      {
        name: 'Shabe-E-Meraj or Barat or Qadr',
        content: {
          heading: 'SHAB-E-MERAJ/BARAAT/QADR',
          text: 'Shab-E-Meraj/Baraat/Qadr',
          videosList: [],
        },
      },
      {
        name: 'Janazah',
        content: {
          heading: 'Janazah',
          text: '',
          videosList: [],
        },
      },
      {
        name: 'Daswa Chilla Barsi',
        content: {
          heading: 'DASWA, CHILLA, BARSI',
          text: '',
          videosList: [],
        },
      },
    ],
  },
  {
    name: 'Islamic History',
    children: [
      {
        name: 'Muslim in Freedom of India',
        content: {
          heading: 'MUSLIM IN FREEDOM',
          text: 'Muslim in Freedom',
          videosList: [
            {
              url: 'https://youtube.com/embed/pq_O-rJUP7Q',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/vuwkJoHrA2I',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/pVeLqCBWvLc',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/nUPyluNT0kA',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/U_sYxjpyimc',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/ST-t2TplmKI',
              urduText: 'ٹیپو سلطان کون تھے؟ 1760-1799',
              hindiText: 'टीपू सुल्तान कौन थे? सन १७६०-१७९९',
              englishText: 'Who was Tipu Sultan? Year 1760-1799',
            },
          ],
        },
      },
      {
        name: 'Muslim Scientist',
        content: {
          heading: 'MUSLIM SCIENTIST',
          text:
            '1001 inventions, 10 Muslim scientists, who invented Algorithm, soap, optics/photoghraphy, free healthcare, education and algebra, Islamic architecture in India, Who invented coffee , and First degree giving University of the world as per Guinness Book of World records.',
          videosList: [
            {
              url: 'https://youtube.com/embed/879kqbx9rqc',
              urduText: '١٠٠١ ایجادات - نیشنل جیوگرافک فلم',
              hindiText:
                '१००१ मुस्लिम्स आविष्कार - नेशनल जियोग्राफिक चैनल की पेश काश',
              englishText:
                '1001 Inventions - Documentary in National Geographic',
            },
            {
              url: 'https://youtube.com/embed/htElD5iUJhw',
              urduText: '١٠ مسلمان سائنسدان',
              hindiText: '10 मुस्लिम वैज्ञानिक',
              englishText: '10 Muslims scientist',
            },
            {
              url: 'https://youtube.com/embed/oRkNaF0QvnI',
              urduText: 'الگورتھم کی ایجاد جسے کمپیوٹر میں استمال کیا جاتا ہے',
              hindiText:
                'अल्गोरिथ की ईजाद जिसे कंप्यूटर में इस्तेमाल किया जाता है',
              englishText: 'Invention of Algorithm used in computer',
            },
            {
              url: 'https://youtube.com/embed/eO1xEDriHRo',
              urduText:
                'صابن ، آپٹکس / فوٹوگرافی ، مفت علاج ، تعلیم اور الجبرا',
              hindiText:
                'साबुन, ऑप्टिक्स / फोटोग्रफी, मुफ्त इलाज , शिक्षा और अलजेब्रा',
              englishText:
                'soap, optics/photoghraphy, free healthcare, education and algebra',
            },
            {
              url: 'https://youtube.com/embed/dhWN9hywE4I',
              urduText: 'ہندوستان میں اسلامی تعمیرات',
              hindiText: 'भारत में इस्लामिकआर्किटेक्चर',
              englishText: 'Islamic Architecture of India',
            },
            {
              url: 'https://youtube.com/embed/xGYooIIL3O0',
              urduText: 'کافی کی ایجاد کس نے کی؟',
              hindiText: 'कॉफी का आविष्कार किसने किया?',
              englishText: 'Who Invented Coffee ?',
            },
            {
              url: 'https://youtube.com/embed/W3se30Zms3c',
              urduText:
                'دنیا کی سب سے پرانی یونیورسٹی ایک مسلم کی بنائی ہوئی - گنیز ورلڈ ریکارڈز کے مطابق',
              hindiText:
                'दुनिया की सब से पुरानी यूनिवर्सिटी एक मुस्लिम की बनाई हुई। गिनीज बुक ऑफ वर्ल्ड रिकॉर्ड के मुताबिक़',
              englishText:
                "World's oldest University by a Muslim as per Guinness Book of World records",
            },
          ],
        },
      },
      {
        name: 'How Old is Islam',
        content: {
          heading: 'HOW OLD IS ISLAM',
          text:
            'Before Adam (a.s), similarities between Islam, Christianity and Judaism, idol worship',
          videosList: [
            {
              url: 'https://youtube.com/embed/JDaPA7yLUqs',
              urduText: 'دنیا کے پہلے انسان آدم علیہ السلام سے پہلے کیا تھا؟',
              hindiText:
                'दुनिया में पहले इंसान आदम (अलैहि सलाम) से पहले क्या था?',
              englishText:
                'What was befor the first man on earth , the Adam (a s)?',
            },
            {
              url: 'https://youtube.com/embed/s7StUtopnjI',
              urduText: 'اسلام، عیسایت اور یہودیت میں 10 مشترکہ باتیں',
              hindiText: 'इस्लाम, ईसाई धर्म और यहूदी धर्म में १० समान्य बातें',
              englishText:
                'Ten similarities between Islam, Christianity and Judaism',
            },
            {
              url: 'https://youtube.com/embed/3PgBqV63Kzs',
              urduText: 'یہودی کون؟',
              hindiText: 'यहूदी कौन?',
              englishText: 'Who are Jews?',
            },
            {
              url: 'https://youtube.com/embed/H0GpNBHCRPE',
              urduText: 'بت پرستی/مورتی پوجا کب شروع ہوئی؟',
              hindiText: 'मूर्ति पूजा कब शुरू हुई?',
              englishText: 'When was the idol worship started?',
            },
          ],
        },
      },
      {
        name: 'Misconseption About Islam',
        content: {
          heading: 'MISCONCEPTION ABOUT ISLAM',
          text:
            'Some people allege that Islamic values are somehow incompatible with decent "Western" values. Such claims could not be further from the truth.',
          videosList: [
            {
              url: 'https://youtube.com/embed/BbYgWHf5Li4',
              urduText: 'کیا اسلام 1400سال پورانا ہے؟',
              hindiText: 'क्या इस्लाम १४०० साल पुराना है?',
              englishText: 'Is Islam 1400 years old?',
            },
            {
              url: 'https://youtube.com/embed/ciutXxazCqI',
              urduText: 'اسلام کے بارے میں 5 غلط فہمیاں',
              hindiText: 'इस्लाम के बारे में 5 गलतफहम',
              englishText: 'Top 5 Misconceptions About Islam',
            },
            {
              url: 'https://youtube.com/embed/m5cb0GVqmuU',
              urduText: 'مسجد تعارفی پروگرام - غیر مسلم بھائیوں کے لئے',
              hindiText: 'मस्जिद परिचय प्रोग्राम - गैर मुस्लिम भाइयों के लिए',
              englishText:
                'Masjid introduction program - For Non-Muslim brother',
            },
            {
              url: 'https://youtube.com/embed/mttz0I9pOqU',
              urduText:
                'اسلام کا مطلب ہے جہاد اور جہاد کا مطلب دہشت گردی ہے۔ کیا یہ سچ ہے؟',
              hindiText:
                'इस्लाम का मतलब जिहाद और जिहाद का मतलब आतंकवाद है। क्या यह सच है?',
              englishText:
                'Islam means Jihad and Jihad means terrorism. is that true?',
            },
            {
              url: 'https://youtube.com/embed/0jyUN6RygjI',
              urduText: 'اسلام کے بارے میں ٹاپ 10 غلط فہمیاں بشمول دہشت گردی',
              hindiText:
                'टॉप १० इस्लाम के बारे में गलत फेहमी , दहशत गर्दी के बारे में भी',
              englishText:
                'Top 10 misconception about Islam including terrorism',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'Others',
    children: [
      {
        name: 'Apply for Govt. Documents',
        content: {
          heading: 'HOW TO APPLY PASSORT / AADHAAR CARD / VOTER ID CARD',
          text:
            // tslint:disable-next-line:max-line-length
            'Login to the Passport Seva Online Portal with the registered Login Id. Click "Apply for Fresh Passport/Re-issue of Passport" link. Fill in the required details in the form and submit. Click the "Pay and Schedule Appointment" link on the "View Saved/Submitted Applications" screen to schedule an appointment',
          videosList: [
            {
              url: 'https://youtube.com/embed/Eo5KFT9W8Wc',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/1x_qBLMxGhA',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
          ],
        },
      },
      {
        name: 'Train and Flight tickets Booking',
        content: {
          heading: 'HOW TO BOOK ONLINE TRAIN/FLIGHT TICKETS',
          text:
            // tslint:disable-next-line:max-line-length
            'Users have to select the source and destination stations, select a train, check for train ticket availability, provide the passenger details (name/s, age, gender, berth preference and meal preference) and then proceed towards payment gateway. The online train ticket booking is finalized once the payment is made.',
          videosList: [
            {
              url: 'https://youtube.com/embed/atatSgZ-mtY',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
          ],
        },
      },
      { name: 'Scholarship', url: 'http://www.360careervision.com/' },
      {
        name: 'What is KYC',
        content: {
          heading: 'WHAT IS KYC',
          text:
            // tslint:disable-next-line:max-line-length
            'Know Your Customer, alternatively known as know your client or simply KYC, is the process of a business verifying the identity of its clients and assessing their suitability, along with the potential risks of illegal intentions towards the business relationship.',
          videosList: [],
        },
      },
      {
        name: 'Using UPI / Paytm',
        content: {
          heading: 'HOW TO USE GOOGLE PAY/PAYTM',
          text:
            // tslint:disable-next-line:max-line-length
            'Download the app on Google Play or the App Store, or visit pay.google.com. Sign in to your Google Account and add a payment method. If you want to use Google Pay in stores, check to see if your phone has NFC.',
          videosList: [
            {
              url: 'https://youtube.com/embed/-cw523kk1Hw',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
            {
              url: 'https://youtube.com/embed/a4Dv37M9Pzw',
              urduText: '',
              hindiText: '',
              englishText: '',
            },
          ],
        },
      },
      { name: 'Books', url: 'http://khalidrahmani.in/english/fatawaa/' },
    ],
  },
];
const newArray = sideMenuDetails.map(item => {
    const category = item.name;
    const subCategories = item.children?.map(i => {
        const subCategory = i.name;
        const topicList = i.children?.map(j => {
            const content = j?.content;
            const topic: any = {
                'english-title': j.name,
                'english-heading':content?.heading,
                'english-sub-heading': content?.text
            };
            topic['video-list'] = content?.videosList?.map((video) => {
                return {
                    'video-url': video.url,
                    english: video.englishText,
                    hindi: video.hindiText,
                    urdu: video.urduText
                }
            } );
            return topic;
        });
        return {
            'sub-category': subCategory,
            'topic-list': topicList
        }
    });
    return {
        category,
        'sub-category':subCategories
    }
});


console.log({
  'categories': newArray
});

*/
