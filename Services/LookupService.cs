

using Yas.Template.Web.Models;

namespace Yas.Template.Web.Services
{
    /// <summary>
    /// سرویس لوکاپ
    /// </summary>
    public class LookupService
    {
        /// <summary>
        /// نوع ارز
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Cut(int? id = null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "درهم امارات",
                id = "AED"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "افغانی افغان",
                id = "AFN"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لک آلبانی",
                id = "ALL"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "درام ارمنستان",
                id = "AMD"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گیلدر آنتیلیان هلند",
                id = "ANG"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کوانزا آنگولا",
                id = "AOA"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو آرژانتین قابل تبدیلا",
                id = "ARS"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فلورین آروبان",
                id = "AWG"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار استرالیا",
                id = "AUD"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "منات آذربایجان",
                id = "AZN"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "علامت قابل تبدیل بوسنی و هرزگوین",
                id = "BAM"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار باربادوس",
                id = "BBD"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تاکا بنگلادشی",
                id = "BDT"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لو بلغارستان",
                id = "BGN"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار بحرین",
                id = "BHD"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک بوروندی",
                id = "BIF"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار برمودا",
                id = "BMD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار برونئی",
                id = "BND"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بولیویایی بولیوی",
                id = "BOB"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "رئال برزیل",
                id = "BRL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار باهامیا",
                id = "BSD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نگولتروم بوتان",
                id = "BTN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بوتسوانا پولا",
                id = "BWP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روبل بلاروس",
                id = "BYN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار بلیز",
                id = "BZD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار کانادا",
                id = "CAD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک کنگو",
                id = "CDF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک سوئیس",
                id = "CHF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو شیلی",
                id = "CLP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "رنمینبی یوان چین",
                id = "CNY"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو کلمبیا",
                id = "COP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کولون کاستاریکا",
                id = "CRC"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو قابل تبدیل کوبا",
                id = "CUC"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اسکودو کیپ ورد",
                id = "CVE"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرون چک",
                id = "CZK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک جیبوتی",
                id = "DJF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرون دانمارک",
                id = "DKK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو دومینیکن",
                id = "DOP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار الجزایر",
                id = "DZD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند مصر",
                id = "EGP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نکفا اریتره",
                id = "ERN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "birr اتیوپی",
                id = "ETB"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "یورو",
                id = "EUR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار فیجی",
                id = "FJD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند جزایر فالکلند",
                id = "FKP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند استرلینگ",
                id = "GBP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لاری گرجستان",
                id = "GEL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سدی غنا",
                id = "GHS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند جبل الطارق",
                id = "GIP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دالاسی گامبیایی",
                id = "GMD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک گینه",
                id = "GNF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کوتزال گواتمالا",
                id = "GTQ"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار گویان",
                id = "GYD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار هنگ کنگ",
                id = "HKD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لمپیرا هندوراس",
                id = "HNL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کونا کرواسی",
                id = "HRK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گورد هائیتی",
                id = "HTG"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فورینت مجارستان",
                id = "HUF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه اندونزی",
                id = "IDR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شیکل جدید اسرائیل",
                id = "ILS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه هند",
                id = "INR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار عراق",
                id = "IQD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ریال ایران",
                id = "IRR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرون ایسلند",
                id = "ISK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار جامائیکا",
                id = "JMD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار اردن",
                id = "JOD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ین ژاپن",
                id = "JPY"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شیلینگ کنیا",
                id = "KES"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قرقیزستان سوم",
                id = "KGS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ریل کامبوج",
                id = "KHR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک کومور",
                id = "KMF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "وون کره شمالی",
                id = "KPW"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "وون کره جنوبی",
                id = "KRW"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار کویت",
                id = "KWD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار جزایر کیمن",
                id = "KYD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تنگه قزاقستان",
                id = "KZT"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لائو کیپ",
                id = "LAK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند لبنان",
                id = "LBP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه سریلانکا",
                id = "LKR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار لیبریا",
                id = "LRD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لوتی لسوتو",
                id = "LSL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار لیبی",
                id = "LYD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "درهم مراکش",
                id = "MAD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لئو مولداوی",
                id = "MDL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "آریاری مالاگاسی",
                id = "MGA"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار مقدونی",
                id = "MKD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کیات میانمار",
                id = "MMK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "توگریک مغولی",
                id = "MNT"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پاتاکای ماکانی",
                id = "MOP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اوگویا موریتانی",
                id = "MRU"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه موریس",
                id = "MUR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روفیا مالدیو",
                id = "MVR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کواچای مالاوی",
                id = "MWK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزوی مکزیکی",
                id = "MXN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "رینگیت مالزی",
                id = "MYR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "متیکال موزامبیک",
                id = "MZN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار نامیبیا",
                id = "NAD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نایرا نیجریه",
                id = "NGN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نیکاراگوئه کوردوبا اورو",
                id = "NIO"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرون نروژ",
                id = "NOK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه نپال",
                id = "NPR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار نیوزلند",
                id = "NZD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ریال عمان",
                id = "OMR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بالبوآ پانامایی",
                id = "PAB"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نووو سول پرو",
                id = "PEN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کینای پاپوآ گینه نو",
                id = "PGK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو فیلیپین",
                id = "PHP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه پاکستان",
                id = "PKR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "زلوتی لهستانی",
                id = "PLN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گوارانی پاراگوئه",
                id = "PYG"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ریال قطر",
                id = "QAR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لئو رومانیایی",
                id = "RON"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار صربستان",
                id = "RSD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روبل روسیه",
                id = "RUB"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک رواندا",
                id = "RWF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ریال سعودی",
                id = "SAR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار جزایر سلیمان",
                id = "SBD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روپیه سیشلو",
                id = "SCR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند سودان",
                id = "SDG"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرون سوئد",
                id = "SEK"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار سنگاپور",
                id = "SGD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند سنت هلنا",
                id = "SHP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لئون سیرالئون",
                id = "SLL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شیلینگ سومالی",
                id = "SOS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار سورینام",
                id = "SRD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند سودان جنوبی",
                id = "SSP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سائوتومه و پرینسیپ دوبرا",
                id = "STN"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کولون سالوادور",
                id = "SVC"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پوند سوریه",
                id = "SYP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لیلانگنی سوازی",
                id = "SZL"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بات تایلند",
                id = "THB"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سامانی تاجیکستانی",
                id = "TJS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "منات ترکمنستان",
                id = "TMT"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دینار تونس",
                id = "TND"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پاآنگا تونگان",
                id = "TOP"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لیر ترکیه",
                id = "TRY"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار ترینیداد و توباگو",
                id = "TTD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار جدید تایوان",
                id = "TWD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شیلینگ تانزانیا",
                id = "TZS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گریونای اوکراینی",
                id = "UAH"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شیلینگ اوگاندا",
                id = "UGX"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار آمریکا",
                id = "USD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پزو اروگوئه",
                id = "UYU"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سام ازبکستان",
                id = "UZS"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سوبرانو بولیوار ونزوئلا",
                id = "VES"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دونگ ویتنامی",
                id = "VND"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "واتو وانواتو",
                id = "VUV"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تالا ساموایی",
                id = "WST"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک CFA آفریقای مرکزی BEAC",
                id = "XAF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نقره",
                id = "XAG"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "طلا",
                id = "XAU"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار کارائیب شرقی",
                id = "XCD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک CFA آفریقای غربی BCEAO",
                id = "XOF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پالادیوم",
                id = "XPD"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فرانک CFP",
                id = "XPF"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پلاتین",
                id = "XPT"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ریال یمن",
                id = "YER"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "راند آفریقای جنوبی",
                id = "ZAR"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کواچای زامبیا",
                id = "ZMW"
            });
            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دلار زیمبابوه",
                id = "ZWL"
            });

            if (id != null)
            {
                lookupOutput = lookupOutput.Where(x => x.id == id.ToString()).ToList();
            }

            if (lookupOutput.Count == 0)
            {
                lookupOutput.Add(new AppModel.Select2OptionModel
                {
                    text = "---",
                    id = id.ToString()
                });
            }

            return lookupOutput.OrderBy(x=>x.text).ToList();

        }

        /// <summary>
        /// استان
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Province(int? id = null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "آذربایجان شرقی",
                id = "041"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "آذربایجان غربی",
                id = "044"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اردبیل",
                id = "045"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اصفهان",
                id = "031"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "البرز",
                id = "026"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ایلام",
                id = "084"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بوشهر",
                id = "077"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تهران",
                id = "021"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "چهار محال و بختیاری",
                id = "038"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "خراسان جنوبی",
                id = "056"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "خراسان رضوی",
                id = "051"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "خراسان شمالی",
                id = "058"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "خوزستان",
                id = "061"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "زنجان",
                id = "024"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سمنان",
                id = "023"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سیستان و بلوچستان",
                id = "054"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فارس",
                id = "071"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قزوین",
                id = "028"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قم",
                id = "025"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کردستان",
                id = "087"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرمان",
                id = "34"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کرمانشاه",
                id = "083"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کهکیلویه و بویر احمد",
                id = "074"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گلستان",
                id = "017"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گیلان",
                id = "013"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لرستان",
                id = "066"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مازندران",
                id = "011"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مرکزی",
                id = "086"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "هرمزگان",
                id = "076"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "همدان",
                id = "081"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "یزد",
                id = "035"
            });

            if (id != null)
            {
                lookupOutput = lookupOutput.Where(x => x.id == id.ToString()).ToList();
            }

            if (lookupOutput.Count == 0)
            {
                lookupOutput.Add(new AppModel.Select2OptionModel
                {
                    text = "---",
                    id = id.ToString()
                });
            }

            return lookupOutput;

        }
        
        /// <summary>
        /// نوع شخص
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Tob(int? id=null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حقیقی",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حقوقی",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مشارکت مدنی",
                id = "3"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اتباع غیر ایرانی",
                id = "4"
            });

            if (id!=null)
            {
                lookupOutput = lookupOutput.Where(x => x.id == id.ToString()).ToList();
            }

            if (lookupOutput.Count==0)
            {
                lookupOutput.Add(new AppModel.Select2OptionModel
                {
                    text = "---",
                    id = id.ToString()
                });
            }

            return lookupOutput;

        }
        
        /// <summary>
        /// نوع کاربر
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> UserType(int? id = null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مودی",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مدیر سیستم",
                id = "2"
            });


            if (id != null)
            {
                lookupOutput = lookupOutput.Where(x => x.id == id.ToString()).ToList();
            }

            if (lookupOutput.Count == 0)
            {
                lookupOutput.Add(new AppModel.Select2OptionModel
                {
                    text = "---",
                    id = id.ToString()
                });
            }

            return lookupOutput;

        }

        /// <summary>
        /// واحد
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Mu(string id =null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "لنگه",
                id = "1611"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "عدل",
                id = "1612"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "جعبه",
                id = "1613"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "توپ",
                id = "1618"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ست",
                id = "1619"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دست",
                id = "1620"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كارتن",
                id = "1624"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "عدد",
                id = "1627"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بسته",
                id = "1628"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پاكت",
                id = "1629"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دستگاه",
                id = "1631"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تخته",
                id = "1640"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "رول",
                id = "1641"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "طاقه",
                id = "1642"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "جفت",
                id = "1643"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "متر مربع",
                id = "1645"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پالت",
                id = "1649"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دوجين",
                id = "1661"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حلقه - رینگ",
                id = "1668"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قراص",
                id = "1673"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قراصه - bundle",
                id = "1694"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ليتر",
                id = "1637"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ساشه",
                id = "1650"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كپسول",
                id = "1683"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بنديل",
                id = "1656"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حلقه - رول",
                id = "1630"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قالب",
                id = "163"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شانه",
                id = "1660"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "متر مكعب",
                id = "1647"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ثوب",
                id = "1689"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نيم دوجين",
                id = "1690"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قرقره",
                id = "1635"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كيلوگرم",
                id = "164"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بطري",
                id = "1638"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "برگ",
                id = "161"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سطل",
                id = "1625"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ورق",
                id = "1654"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شاخه",
                id = "1646"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قوطي",
                id = "1644"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "جلد",
                id = "1617"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تيوب",
                id = "162"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "متر",
                id = "165"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كلاف",
                id = "1610"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كيسه",
                id = "1615"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "طغرا",
                id = "1680"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بشكه",
                id = "1639"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گالن",
                id = "1614"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فاقد بسته بندي",
                id = "1687"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كارتن - case master",
                id = "1693"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "صفحه",
                id = "166"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مخزن",
                id = "1666"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تانكر",
                id = "1626"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دبه",
                id = "1648"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سبد",
                id = "1684"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تن",
                id = "169"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بانكه",
                id = "1651"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سيلندر",
                id = "1633"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فوت مربع",
                id = "1679"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حلب",
                id = "168"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شيت",
                id = "1665"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "چليك",
                id = "1659"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "جام",
                id = "1636"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گرم",
                id = "1622"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نخ",
                id = "1616"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "شعله",
                id = "1652"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قيراط",
                id = "1678"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ميلي ليتر",
                id = "16100"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ميلي متر",
                id = "16101"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ميلي گرم",
                id = "16102"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ساعت",
                id = "16103"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "روز",
                id = "16104"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تن كيلومتر",
                id = "16105"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "كيلووات ساعت",
                id = "1669"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نفر",
                id = "1676"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ثانيه",
                id = "16110"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دقيقه",
                id = "16111"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ماه",
                id = "16112"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سال",
                id = "16113"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قطعه",
                id = "16114"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سانتي متر",
                id = "16115"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سانتي متر مربع",
                id = "16116"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فروند",
                id = "1632"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "واحد",
                id = "1653"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ليوان",
                id = "16108"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نوبت",
                id = "16117"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مگا وات ساعت",
                id = "16118"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "گیگا بایت بر ثانیه",
                id = "16119"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ویال",
                id = "1681"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حلقه (دیسک)",
                id = "1667"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نسخه (جلد)",
                id = "16120"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نفر -ساعت",
                id = "16121"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کیلومتر",
                id = "16122"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "آمپر",
                id = "16125"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "میلی آمپر",
                id = "16126"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مثقال",
                id = "16127"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سیر",
                id = "16128"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "دفعه (time)",
                id = "16129"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مگا یونیت",
                id = "16130"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کادر",
                id = "16131"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پرس",
                id = "16132"
            });

            if (!string.IsNullOrEmpty(id) && !string.IsNullOrWhiteSpace(id))
            {
                lookupOutput = lookupOutput.Where(x => x.id == id).ToList();
            }

            return lookupOutput.OrderBy(x => x.text).ToList();
        }

        /// <summary>
        /// نوع پرداخت
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Pmt()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "چک",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تهاتر",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "وجه نقد",
                id = "3"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "pos",
                id = "4"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "درگاه پرداخت اینترنتی",
                id = "5"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کارت به کارت",
                id = "6"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "انتقال به حساب",
                id = "7"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "سایر",
                id = "8"
            });


            return lookupOutput;

        }

        /// <summary>
        /// دسته بندی مالیاتی
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> TaxCategory()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حقیقی",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "حقوقی",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "مشارکت مدنی",
                id = "3"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اتباع غیر ایرانی",
                id = "4"
            });

            return lookupOutput;

        }

        /// <summary>
        /// نوع فعالیت
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> AvtivityType()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "تولیدی",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بازرگانی",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "خدماتی",
                id = "3"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پیمانکاری",
                id = "4"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "کشاورزی / دامپروری",
                id = "5"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اصناف",
                id = "6"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "آموزشی",
                id = "7"
            });

            return lookupOutput;

        }
        
        /// <summary>
        /// وضعیت صورتحساب
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> InvoiceStatus(byte? id = null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "پیش نویس",
                id = "0"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "در انتظار پیگیری",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ارسال موفق",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ارسال شکست خورده",
                id = "3"
            });


            if (id != null)
            {
                lookupOutput = lookupOutput.Where(x => x.id == id.ToString()).ToList();
            }

            if (lookupOutput.Count == 0)
            {
                lookupOutput.Add(new AppModel.Select2OptionModel
                {
                    text = "---",
                    id = id.ToString()
                });
            }

            return lookupOutput;

        }

        /// <summary>
        /// نوع صورتحساب
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Inty()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نوع اول",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نوع دوم",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نوع سوم",
                id = "3"
            });

            return lookupOutput;

        }

        /// <summary>
        /// نحوه تسویه
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Setm()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نقد",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نسیه",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "نقد / نسیه",
                id = "3"
            });

            return lookupOutput;

        }

        /// <summary>
        /// الگوی پرواز
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Ft()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "داخلی",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "خارجی",
                id = "2"
            });

            return lookupOutput;

        }

        /// <summary>
        /// الگوی صورتحساب
        /// </summary>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Inp()
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فروش",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "فروش ارزی",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "صورتحساب طلا، جواهر و پلاتین",
                id = "3"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قرارداد پیمانکاری",
                id = "4"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "قبوض خدماتی",
                id = "5"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "بلیط هواپیما",
                id = "6"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "صادرات",
                id = "7"
            });

            return lookupOutput;
        }

        /// <summary>
        /// موضوع صورتحساب
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static List<AppModel.Select2OptionModel> Ins(byte? id = null)
        {
            List<AppModel.Select2OptionModel> lookupOutput = new List<AppModel.Select2OptionModel>();

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اصلی",
                id = "1"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "اصلاحی",
                id = "2"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "ابطالی",
                id = "3"
            });

            lookupOutput.Add(new AppModel.Select2OptionModel
            {
                text = "برگشت از فروش",
                id = "4"
            });

            if (id != null)
            {
                lookupOutput = lookupOutput.Where(x => x.id == id.ToString()).ToList();
            }

            if (lookupOutput.Count == 0)
            {
                lookupOutput.Add(new AppModel.Select2OptionModel
                {
                    text = "---",
                    id = id.ToString()
                });
            }

            return lookupOutput;

        }

    }
}
