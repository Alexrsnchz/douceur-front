import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';
import { Link } from 'react-router-dom';

function Faq() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f1e5d1] py-10">
        <div className="container bg-white mx-auto rounded-2xl shadow-xl px-5 py-10">
          <section className="px-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Preguntas frecuentes
            </h2>
            <div className="grid grid-cols-2 gap-8 py-5">
              <Accordion
                type="single"
                collapsible
                className="border-2 border-gray-300 rounded-2xl bg-white bg-opacity-50 px-3"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Qué tipos de pasteles ofrecen?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Ofrecemos una amplia variedad de pasteles, incluyendo
                    pasteles de chocolate, vainilla, red velvet, zanahoria, tres
                    leches, cheesecakes, y más. También tenemos opciones
                    especiales como pasteles temáticos y de temporada.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Tienen opciones para personas con alergias o restricciones
                    dietéticas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, ofrecemos opciones para personas con alergias o
                    restricciones dietéticas, como pasteles sin gluten, sin
                    lactosa, veganos y sin azúcar. Por favor, especifique sus
                    necesidades al hacer su pedido.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Puedo personalizar el diseño y los sabores de mi pastel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Por supuesto, ofrecemos la posibilidad de personalizar tanto
                    el diseño como los sabores de su pastel. Puede elegir entre
                    una variedad de sabores, rellenos y decoraciones para crear
                    el pastel perfecto para su ocasión.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Cuánto tiempo de anticipación necesito para hacer un
                    pedido?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Recomendamos hacer su pedido con al menos 72 horas de
                    anticipación para asegurar la disponibilidad y la calidad.
                    Para pedidos grandes o personalizados, es mejor hacerlos con
                    una semana de anticipación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Ofrecen servicio de entrega a domicilio?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, ofrecemos servicio de entrega a domicilio. Puede elegir
                    la fecha y la hora de entrega al hacer su pedido. Tenga en
                    cuenta que aplican cargos adicionales por la entrega
                    dependiendo de la ubicación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    ¿Cuáles son las zonas de entrega disponibles?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Actualmente, realizamos entregas dentro de la ciudad y en
                    algunas áreas suburbanas cercanas. Por favor, ingrese su
                    dirección al hacer el pedido para confirmar si su zona está
                    dentro de nuestra área de cobertura.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    ¿Hay algún costo adicional por la entrega?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, aplicamos un costo adicional por la entrega que varía
                    según la distancia desde nuestra tienda. Los cargos de
                    entrega se calculan automáticamente al ingresar su dirección
                    durante el proceso de compra.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    ¿Puedo recoger mi pedido en su tienda física?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, puede optar por recoger su pedido en nuestra tienda
                    física sin costo adicional. Simplemente seleccione la opción
                    de recogida al hacer su pedido y elija la hora que le sea
                    más conveniente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>
                    ¿Aceptan pedidos urgentes o de último minuto?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Dependiendo de nuestra disponibilidad, podemos aceptar
                    pedidos urgentes. Le recomendamos que nos llame directamente
                    para verificar la posibilidad de cumplir con su solicitud de
                    último minuto.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>
                    ¿Cómo puedo hacer un pedido?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Puede hacer su pedido a través de nuestro sitio web,
                    seleccionando los productos deseados y siguiendo el proceso
                    de compra en línea. También aceptamos pedidos por teléfono o
                    correo electrónico.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="border-2 border-gray-300 rounded-2xl bg-white bg-opacity-50 px-3"
              >
                <AccordionItem value="item-11">
                  <AccordionTrigger>
                    ¿Qué métodos de pago aceptan?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Aceptamos varios métodos de pago, incluyendo tarjetas de
                    crédito y débito, PayPal y transferencias bancarias. Todas
                    las transacciones se procesan de manera segura para proteger
                    su información.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>
                    ¿Ofrecen opciones de pago a plazos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Actualmente, no ofrecemos opciones de pago a plazos. Sin
                    embargo, puede utilizar métodos de pago como PayPal que a
                    veces tienen sus propios planes de financiación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger>
                    ¿Puedo cancelar o modificar mi pedido después de haberlo
                    realizado?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, puede cancelar o modificar su pedido hasta 48 horas
                    antes de la fecha de entrega programada. Para hacerlo, por
                    favor contáctenos lo antes posible para evitar cargos
                    adicionales.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger>
                    ¿Cuál es su política de devoluciones y reembolsos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Nuestra política de devoluciones y reembolsos permite
                    solicitar un reembolso completo si hay algún problema con su
                    pedido. Debe notificarnos dentro de las 24 horas posteriores
                    a la entrega para resolver cualquier inconveniente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                  <AccordionTrigger>
                    ¿Tienen un catálogo de pasteles ya preparados o solo hacen
                    bajo pedido?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Tenemos un catálogo de pasteles ya preparados disponibles
                    para la compra inmediata, así como opciones para pasteles
                    personalizados bajo pedido. Consulte nuestra sección de
                    "Pasteles Disponibles" en nuestro sitio web.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-16">
                  <AccordionTrigger>
                    ¿Ofrecen decoraciones especiales para eventos como bodas,
                    cumpleaños o aniversarios?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, ofrecemos decoraciones especiales para una variedad de
                    eventos, incluyendo bodas, cumpleaños, aniversarios, y más.
                    Trabajamos con usted para diseñar el pastel perfecto para su
                    celebración.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-17">
                  <AccordionTrigger>
                    ¿Cómo debo almacenar el pastel para que se mantenga fresco?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Recomendamos mantener su pastel en el refrigerador hasta
                    aproximadamente una hora antes de servirlo. Esto ayuda a
                    conservar la frescura y la textura del pastel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-18">
                  <AccordionTrigger>
                    ¿Ofrecen descuentos para pedidos grandes o eventos
                    corporativos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, ofrecemos descuentos para pedidos grandes y eventos
                    corporativos. Por favor, contáctenos directamente para
                    discutir los detalles y obtener un presupuesto
                    personalizado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-19">
                  <AccordionTrigger>
                    ¿Tienen algún programa de fidelidad o recompensas para
                    clientes frecuentes?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Sí, tenemos un programa de fidelidad para nuestros clientes
                    frecuentes. Regístrese en nuestro sitio web para acumular
                    puntos con cada compra y disfrute de descuentos y ofertas
                    exclusivas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-20">
                  <AccordionTrigger>
                    ¿Cómo puedo contactar con atención al cliente para resolver
                    dudas o problemas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-medium">
                    Puede contactar con nuestro equipo de atención al cliente a
                    través de nuestro formulario de contacto en línea, por
                    correo electrónico o llamándonos directamente. Estamos aquí
                    para ayudarle con cualquier consulta o problema que pueda
                    tener.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Recursos adicionales
            </h2>
            <div className="px-10 py-5">
              <Carousel
                opts={{
                  loop: true,
                }}
              >
                <CarouselPrevious />
                <CarouselContent>
                  <CarouselItem className="lg:basis-1/3">
                    <Link to="/">
                      <Card className="bg-white border-2 border-gray-300">
                        <CardHeader>
                          <CardTitle className="font-semibold text-[#d4a373]">
                            Guía de Almacenamiento de Pasteles
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-sm text-gray-700">
                            Recomendamos mantener su pastel en el refrigerador
                            hasta aproximadamente una hora antes de servirlo.
                            Esto ayuda a conservar la frescura y la textura del
                            pastel.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-1/3">
                    <Link to="/">
                      <Card className="bg-white border-2 border-gray-300 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-semibold text-[#d4a373]">
                            Política de Devoluciones y Reembolsos
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-sm text-gray-700">
                            Nuestra política de devoluciones y reembolsos
                            permite solicitar un reembolso completo si hay algún
                            problema con su pedido.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-1/3">
                    <Link to="/">
                      <Card className="bg-white border-2 border-gray-300 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-semibold text-[#d4a373]">
                            Programa de Fidelidad
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-sm text-gray-700">
                            Tenemos un programa de fidelidad para nuestros
                            clientes frecuentes. Regístrese en nuestro sitio web
                            para disfrutar de descuentos y ofertas exclusivas.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>

                  <CarouselItem className="lg:basis-1/3">
                    <Link to="/">
                      <Card className="bg-white border-2 border-gray-300 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-semibold text-[#d4a373]">
                            Guía de Almacenamiento de Pasteles
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-sm text-gray-700">
                            Recomendamos mantener su pastel en el refrigerador
                            hasta aproximadamente una hora antes de servirlo.
                            Esto ayuda a conservar la frescura y la textura del
                            pastel.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-1/3">
                    <Link to="/">
                      <Card className="bg-white border-2 border-gray-300 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-semibold text-[#d4a373]">
                            Política de Devoluciones y Reembolsos
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-sm text-gray-700">
                            Nuestra política de devoluciones y reembolsos
                            permite solicitar un reembolso completo si hay algún
                            problema con su pedido.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                  <CarouselItem className="lg:basis-1/3">
                    <Link to="/">
                      <Card className="bg-white border-2 border-gray-300 shadow-lg">
                        <CardHeader>
                          <CardTitle className="font-semibold text-[#d4a373]">
                            Programa de Fidelidad
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-sm text-gray-700">
                            Tenemos un programa de fidelidad para nuestros
                            clientes frecuentes. Regístrese en nuestro sitio web
                            para disfrutar de descuentos y ofertas exclusivas.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
