import Image from "next/image"
import { CreditCard, Landmark, Shield, HelpCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">طرق الدفع</h1>
        <p className="text-gray-600">اختر طريقة الدفع المناسبة لك</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">طرق الدفع المتاحة</h2>

        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="card">بطاقات الائتمان</TabsTrigger>
            <TabsTrigger value="bank">التحويل البنكي</TabsTrigger>
            <TabsTrigger value="cash">ابل باي</TabsTrigger>
          </TabsList>

          <TabsContent value="card" className="p-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">الدفع ببطاقات الائتمان</h3>
                <p className="mb-4">
                  نقبل جميع بطاقات الائتمان الرئيسية. يتم معالجة المدفوعات بشكل آمن من خلال بوابة دفع مشفرة لضمان حماية
                  معلوماتك المالية.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="Visa"
                    width={80}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="Mastercard"
                    width={80}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="American Express"
                    width={80}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="KNET"
                    width={80}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center text-green-600 mb-4">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">جميع المعاملات مؤمنة ومشفرة</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-bold mb-4">كيفية الدفع ببطاقة الائتمان</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>أضف المنتجات إلى سلة التسوق</li>
                    <li>انتقل إلى صفحة الدفع</li>
                    <li>اختر "الدفع ببطاقة الائتمان" كطريقة الدفع</li>
                    <li>أدخل تفاصيل بطاقتك</li>
                    <li>تأكد من صحة المعلومات واضغط على "إتمام الدفع"</li>
                    <li>ستتلقى تأكيداً بالبريد الإلكتروني بمجرد اكتمال عملية الدفع</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bank" className="p-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">التحويل البنكي</h3>
                <p className="mb-4">
                  يمكنك إجراء تحويل بنكي مباشر إلى حسابنا. يرجى ملاحظة أن المنتجات لن يتم شحنها حتى يتم تأكيد استلام
                  المبلغ في حسابنا.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-bold mb-2">تفاصيل الحساب البنكي:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <span className="font-medium">اسم البنك:</span> بنك الكويت الوطني
                    </li>
                    <li>
                      <span className="font-medium">اسم الحساب:</span> شركة اكسايت للإلكترونيات
                    </li>
                    <li>
                      <span className="font-medium">رقم الحساب:</span> 1234567890
                    </li>
                    <li>
                      <span className="font-medium">IBAN:</span> KW81NBOK0000000000001234567890
                    </li>
                    <li>
                      <span className="font-medium">SWIFT:</span> NBOKWKWK
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-bold mb-4">كيفية إتمام التحويل البنكي</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>أضف المنتجات إلى سلة التسوق</li>
                    <li>انتقل إلى صفحة الدفع</li>
                    <li>اختر "التحويل البنكي" كطريقة الدفع</li>
                    <li>ستظهر لك تفاصيل الحساب البنكي</li>
                    <li>قم بإجراء التحويل من حسابك البنكي</li>
                    <li>أرسل إلينا إيصال التحويل عبر البريد الإلكتروني مع رقم الطلب</li>
                    <li>سنقوم بتأكيد استلام المبلغ وشحن طلبك</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cash" className="p-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">الدفع باستخدام ابل باي</h3>
                <p className="mb-4">
                  يمكنك الدفع بسهولة وأمان باستخدام ابل باي. هذه الطريقة متاحة فقط لمستخدمي أجهزة ابل.
                </p>
                <div className="flex justify-center mb-6">
                  <Image
                    src="/placeholder.svg?height=80&width=120"
                    alt="Apple Pay"
                    width={120}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold mb-2">مميزات الدفع باستخدام ابل باي:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>سرعة وسهولة في إتمام عملية الدفع</li>
                    <li>أمان عالي لمعلوماتك المالية</li>
                    <li>لا حاجة لإدخال تفاصيل البطاقة في كل مرة</li>
                    <li>تأكيد الدفع باستخدام بصمة الإصبع أو Face ID</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-bold mb-4">كيفية الدفع باستخدام ابل باي</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>أضف المنتجات إلى سلة التسوق</li>
                    <li>انتقل إلى صفحة الدفع</li>
                    <li>اختر "ابل باي" كطريقة الدفع</li>
                    <li>انقر على زر "الدفع باستخدام ابل باي"</li>
                    <li>قم بتأكيد الدفع باستخدام بصمة الإصبع أو Face ID</li>
                    <li>ستتلقى تأكيداً بالبريد الإلكتروني بمجرد اكتمال عملية الدفع</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <CreditCard className="h-8 w-8 text-blue-900" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">دفع آمن</h3>
          <p className="text-sm text-gray-600">جميع معاملات الدفع مشفرة ومؤمنة بأحدث تقنيات الحماية</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Landmark className="h-8 w-8 text-blue-900" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">خيارات متعددة</h3>
          <p className="text-sm text-gray-600">نوفر مجموعة متنوعة من طرق الدفع لتناسب احتياجاتك</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-blue-900" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">حماية المشتري</h3>
          <p className="text-sm text-gray-600">استرداد الأموال مضمون في حالة عدم استلام المنتج أو اختلافه عن الوصف</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة حول الدفع</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>هل معلومات بطاقتي الائتمانية آمنة؟</AccordionTrigger>
            <AccordionContent>
              نعم، نحن نستخدم أحدث تقنيات التشفير وبروتوكولات الأمان لحماية معلوماتك المالية. نحن متوافقون مع معايير
              أمان بيانات صناعة بطاقات الدفع (PCI DSS)، ولا نقوم بتخزين تفاصيل بطاقتك الائتمانية على خوادمنا.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>متى يتم خصم المبلغ من بطاقتي؟</AccordionTrigger>
            <AccordionContent>
              يتم خصم المبلغ من بطاقتك فور تأكيد الطلب. في بعض الحالات، قد يتم إجراء تفويض مؤقت للمبلغ للتحقق من صلاحية
              البطاقة، ثم يتم الخصم الفعلي عند شحن الطلب.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>هل ��مكنني استخدام أكثر من طريقة دفع للطلب الواحد؟</AccordionTrigger>
            <AccordionContent>
              حالياً، لا يمكن استخدام أكثر من طريقة دفع للطلب الواحد. يجب اختيار طريقة دفع واحدة لإتمام عملية الشراء. إذا
              كنت ترغب في تقسيم المبلغ، يمكنك إنشاء طلبات منفصلة واستخدام طرق دفع مختلفة لكل طلب.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>ماذا أفعل إذا فشلت عملية الدفع؟</AccordionTrigger>
            <AccordionContent>
              إذا فشلت عملية الدفع، يرجى التحقق من صحة معلومات بطاقتك وتوفر رصيد كافٍ. يمكنك محاولة الدفع مرة أخرى أو
              استخدام طريقة دفع بديلة. إذا استمرت المشكلة، يرجى الاتصال بخدمة العملاء للحصول على المساعدة.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>كيف يمكنني الحصول على فاتورة ضريبية؟</AccordionTrigger>
            <AccordionContent>
              يتم إرسال الفاتورة الضريبية تلقائياً إلى بريدك الإلكتروني بعد إتمام عملية الشراء. يمكنك أيضاً تنزيل الفاتورة
              من صفحة "طلباتي" في حسابك. إذا كنت بحاجة إلى فاتورة باسم شركة، يرجى إدخال بيانات الشركة أثناء عملية
              الشراء.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-blue-900 text-white rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى مساعدة؟</h2>
        <p className="mb-6">فريق خدمة العملاء لدينا متاح للإجابة على جميع استفساراتك حول طرق الدفع</p>
        <div className="flex justify-center items-center">
          <HelpCircle className="h-5 w-5 mr-2" />
          <span>اتصل بنا على: 1800-555-123</span>
        </div>
      </div>
    </div>
  )
}
