import Image from "next/image"
import Link from "next/link"
import { Truck, Clock, MapPin, HelpCircle, Phone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">الشحن والتوصيل</h1>
        <p className="text-gray-600">كل ما تحتاج معرفته عن خدمات الشحن والتوصيل لدينا</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Shipping Service"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">خدمة التوصيل السريع</h2>
          <p className="mb-4">
            نحن نفخر بتقديم خدمة توصيل سريعة وموثوقة لجميع عملائنا. مع فريق التوصيل المتخصص لدينا، يمكنك الاعتماد علينا
            لتوصيل مشترياتك بأمان وفي الوقت المحدد.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Truck className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold mb-1">توصيل سريع</h3>
                <p className="text-sm text-gray-600">توصيل في نفس اليوم أو اليوم التالي للمنتجات المختارة</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Clock className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold mb-1">تتبع الطلب</h3>
                <p className="text-sm text-gray-600">تتبع طلبك في الوقت الفعلي من خلال تطبيقنا أو موقعنا</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <MapPin className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold mb-1">تغطية واسعة</h3>
                <p className="text-sm text-gray-600">نغطي جميع المناطق في الكويت</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <HelpCircle className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-bold mb-1">دعم العملاء</h3>
                <p className="text-sm text-gray-600">فريق دعم متاح على مدار الساعة لمساعدتك</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              <div>
                <p className="font-bold">للاستفسار عن الشحن والتوصيل</p>
                <p className="text-sm">اتصل بنا على: 1800-555-123</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">رسوم الشحن والتوصيل</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3 text-right">المنطقة</th>
                <th className="p-3 text-right">رسوم التوصيل العادي</th>
                <th className="p-3 text-right">رسوم التوصيل السريع</th>
                <th className="p-3 text-right">الوقت المتوقع للتوصيل</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">العاصمة</td>
                <td className="p-3">مجاناً للطلبات فوق 20 د.ك</td>
                <td className="p-3">2 د.ك</td>
                <td className="p-3">1-2 يوم عمل</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="p-3">حولي</td>
                <td className="p-3">مجاناً للطلبات فوق 20 د.ك</td>
                <td className="p-3">2 د.ك</td>
                <td className="p-3">1-2 يوم عمل</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">الفروانية</td>
                <td className="p-3">مجاناً للطلبات فوق 25 د.ك</td>
                <td className="p-3">3 د.ك</td>
                <td className="p-3">1-3 يوم عمل</td>
              </tr>
              <tr className="border-b bg-gray-100">
                <td className="p-3">الأحمدي</td>
                <td className="p-3">مجاناً للطلبات فوق 30 د.ك</td>
                <td className="p-3">4 د.ك</td>
                <td className="p-3">2-3 يوم عمل</td>
              </tr>
              <tr>
                <td className="p-3">الجهراء</td>
                <td className="p-3">مجاناً للطلبات فوق 30 د.ك</td>
                <td className="p-3">4 د.ك</td>
                <td className="p-3">2-3 يوم عمل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة حول الشحن والتوصيل</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>كيف يمكنني تتبع طلبي؟</AccordionTrigger>
            <AccordionContent>
              يمكنك تتبع طلبك بسهولة من خلال الدخول إلى حسابك على موقعنا أو تطبيقنا، والانتقال إلى قسم "طلباتي"، ثم
              النقر على رقم الطلب الذي ترغب في تتبعه. ستظهر لك معلومات مفصلة عن حالة طلبك وموقعه الحالي.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>ما هي مدة التوصيل المتوقعة؟</AccordionTrigger>
            <AccordionContent>
              تختلف مدة التوصيل حسب موقعك والمنتجات التي طلبتها. بشكل عام، نقدم خدمة التوصيل في نفس اليوم للمنتجات
              المتوفرة في المخزون والمناطق القريبة، وخلال 1-3 أيام عمل للمناطق الأخرى. يمكنك الاطلاع على الوقت المتوقع
              للتوصيل أثناء إتمام عملية الشراء.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>هل يمكنني تغيير عنوان التوصيل بعد تقديم الطلب؟</AccordionTrigger>
            <AccordionContent>
              نعم، يمكنك تغيير عنوان التوصيل طالما أن طلبك لم يتم شحنه بعد. للقيام بذلك، يرجى الاتصال بخدمة العملاء في
              أقرب وقت ممكن وتزويدهم برقم طلبك والعنوان الجديد. يرجى ملاحظة أنه قد تكون هناك رسوم إضافية إذا كان العنوان
              الجديد في منطقة مختلفة.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>ماذا يحدث إذا لم أكن متواجداً عند التوصيل؟</AccordionTrigger>
            <AccordionContent>
              إذا لم تكن متواجداً عند التوصيل، سيحاول مندوب التوصيل الاتصال بك لترتيب وقت آخر مناسب. إذا تعذر الوصول
              إليك، سنترك إشعاراً ونحاول التوصيل مرة أخرى في اليوم التالي. بعد محاولتين غير ناجحتين، سيتم إعادة الطلب إلى
              مخازننا وسنتواصل معك لترتيب استلام الطلب أو إعادة التوصيل.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>هل تقدمون خدمة التوصيل الدولي؟</AccordionTrigger>
            <AccordionContent>
              حالياً، نقدم خدمة التوصيل داخل الكويت فقط. نحن نعمل على توسيع خدماتنا لتشمل دول مجلس التعاون الخليجي في
              المستقبل القريب. يرجى متابعة موقعنا وحساباتنا على وسائل التواصل الاجتماعي للحصول على آخر التحديثات.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">هل لديك المزيد من الأسئلة؟</h2>
        <p className="mb-6">فريق خدمة العملاء لدينا متاح للإجابة على جميع استفساراتك</p>
        <Link href="/contact">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
            تواصل معنا
          </button>
        </Link>
      </div>
    </div>
  )
}
