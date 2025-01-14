import React from "react";
import logo from "./images/va.jpeg";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const Template = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCell, styles.imageCell]}>
                <Image src={logo} style={styles.image} />
              </View>
              <View style={styles.tableCellAddress}>
                <Text>
                  QUITO MATRIZ:Av.Occidental N52-120 y Av.La Florida
                  Telefono:(02)3959060
                </Text>
                <Text>
                  GUAYAQUIL SUCURSAL:Av.Carlos Julio Arosemena Km.1
                  Telefono:(04)2590840
                </Text>
                <Text>
                  MANTA SUCURSAL:Ciudadela Umiña Via de Circunvalación junto a
                  Tecnicentro Nitroauto Telefono: :(05)3700383
                </Text>
                <Text>
                  PORTOVIEJO SUCURSAL:Av.Metropolitan a Km 1.5 via a Manta junto
                  a Ediasa Telefono:(05)3701575
                </Text>
                <Text>PBX:1800827282 www.vallejoaraujo.com</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>1800-827282 Opción 1</Text>
                <Text>VALLEJO ARAUJO S.A</Text>
                <Text>ORDEN DE TRABAJO TALLER</Text>
                <Text>BODEGA: ROMBO:</Text>
              </View>
              <View style={styles.tableCell}>
              <Text>OT:</Text>
                <Text>Fecha de Recepcion</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>NOMBRE DEL CLIENTE:</Text>
                    <Text style={styles.TextSpace}>FACTURAR A:</Text>
                    <Text style={styles.TextSpace}>TERMINOS DE PAGO:</Text>
                    <Text style={styles.TextSpace}>MODELO:</Text>
                    <Text style={styles.TextSpace}>V/N:</Text>
                    <Text style={styles.TextSpace}>T/A:             T/M:             4/4:            4/2:   </Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text> </Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text> </Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}> </Text>
                    <Text style={styles.TextSpace}> </Text>
                    <Text style={styles.TextSpace}>TELEFONO:</Text>
                    <Text style={styles.TextSpace}>AÑO:</Text>
                    <Text style={styles.TextSpace}>MOTOR:</Text>
                    <Text style={styles.TextSpace}>ASESOR DE SERVICIO:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>RUC/CI:</Text>
                    <Text style={styles.TextSpace}>DIRECCIÓN:</Text>
                    <Text style={styles.TextSpace}> </Text>
                    <Text style={styles.TextSpace}>COLOR:</Text>
                    <Text style={styles.TextSpace}> </Text>
                    <Text style={styles.TextSpace}> </Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>CORREO:</Text>
                    <Text style={styles.TextSpace}> </Text>
                    <Text style={styles.TextSpace}> </Text>
                    <Text style={styles.TextSpace}>PLACA:</Text>
                    <Text style={styles.TextSpace}>KMS:</Text>
                    <Text style={styles.TextSpace}></Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Antena:</Text>
                    <Text style={styles.TextSpace}>Encendedor:</Text>
                    <Text style={styles.TextSpace}>Llantas:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Radio:</Text>
                    <Text style={styles.TextSpace}>Moqueta:</Text>
                    <Text style={styles.TextSpace}>Gata:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Plumas</Text>
                    <Text style={styles.TextSpace}>Espejos:</Text>
                    <Text style={styles.TextSpace}>Herramien:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Extinguidor:</Text>
                    <Text style={styles.TextSpace}>Combustible:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Control puerta:</Text>
                    <Text style={styles.TextSpace}>Triangulos:</Text>
                    <Text style={styles.TextSpace}>Llave Ruedas:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Seguros Aros:</Text>
                    <Text style={styles.TextSpace}>Cd´s:</Text>
                    <Text style={styles.TextSpace}>Botiquín:</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.TextSpace}>Signos:</Text>
                    <Text style={styles.TextSpace}>Tapacubos:</Text>
                    <Text style={styles.TextSpace}>TapaGas:</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell2}>
                <Text style={styles.TextSpace2}>REGISTRO DE LLAMADAS</Text>
                <View style={styles.table1}>
      {/* Encabezados */}
      <View style={styles.headerRow}>
        <View style={styles.headerCell1}><Text style={styles.headerText}>FECHA</Text></View>
        <View style={styles.headerCell1}><Text style={styles.headerText}>HORA</Text></View>
        <View style={styles.headerCell1}><Text style={styles.headerText}>USUARIO (Nombre y Firma)</Text></View>
        <View style={styles.headerCell1}><Text style={styles.headerText}>Verificación (f)</Text></View>
      </View>
      {/* Filas de datos */}
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
        <View style={styles.cell}><Text style={styles.cellText}></Text></View>
      </View>
    </View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.TextSpace2}>SINTOMAS PRESENTADOS</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.TextSpace}>OBSERVACIONES GENERALES</Text>
                <Text style={styles.TextSpace}> </Text>
                <Text style={styles.TextSpace}> </Text>
                <Text style={styles.TextSpace}> </Text>
                <Text style={styles.TextSpace}> </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell3}>
                <Text style={styles.TextSpace4}>AUTORIZACIÓN CLIENTE</Text>
                <Text>
                  1.- La presente autorización expresa que: Siendo el
                  propietario o actuando como representante del mismo estoy en
                  condiciones de autorizar los servicios anotados, así como
                  remplazo de las piezas que fueren pertinentes para la
                  ejecución de los mismos.
                </Text>
                <Text>
                  2.- El valor de la factura por toda la reparación o servicio
                  será cancelada de acuerdo a los términos y forma de pago, al
                  recibir el trabajo.
                </Text>
                <Text>
                  3.- Que después de 7 días de haberme comunicado VALLEJO ARAUJO
                  S.A. que los servicios requeridos han sido completamente
                  efectuados, se cargue $ 5.00 diarios por concepto de bodega.
                </Text>
                <Text>
                  4.- Cualquier reclamo relacionado con los servicios obtenidos
                  deberé presentarlo dentro de un plazo máximo de 10 días, a
                  contar de la fecha de recibidos estos.
                </Text>
                <Text>
                  5.- Autorizar al personal específico de VALLEJO ARAUJO S.A.
                  para que mi vehículo sea probado en la vía pública.
                </Text>
                <Text>
                  6.- Autorizar a VALLEJO ARAUJO S.A. para que envié a otros
                  talleres a hacer ciertas reparaciones especializadas que no se
                  efectúan regularmente en este taller.
                </Text>
                <Text>
                  7.- Exonerar de responsabilidad a VALLEJO ARAUJO S.A. por
                  cualquier demora causada por la dificultad de conseguir
                  repuestos o por demoras en el despacho de los mismos por el
                  proveedor.
                </Text>
                <Text>
                  8.- Exonerar a VALLEJO ARAUJO S.A. y a su personal de toda
                  responsabilidad, por pérdidas, robo, incendio o accidentes y
                  los riesgos que estén fuera de su control.{" "}
                </Text>
              </View>
              <View style={styles.tableCell}>
              <Image src={logo} style={styles.image} />
              <Text style={styles.headerCell}>Rotura, faltante, abolladura y raspones marcados con (X)</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>
                  Firma: ___________ Nombre:________________ C.I. Ó RUC:
                </Text>
                <Text>(No firmar sin no leer condiciones.)</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>INFORMACIÓN PARA EL CLIENTE</Text>
                <Text>
                  -Este comprobante certifica que hemos recibido su vehículo
                  para reparación o chequeo.
                </Text>
                <Text>
                  - El pago debe hacerse según los términos autorizados y
                  aceptados; si desea cancelar de otra manera debe ponerse en
                  contacto con VALLEJO ARAUJO S.A. antes de acercarse a retirar
                  el vehículo.
                </Text>
                <Text>
                  - Nuestro horario de atención es de lunes a viernes de 07h30 a
                  17h30, la hora máxima de entrega de vehículos es hasta las
                  17h30
                </Text>
                <Text>
                  - La caja atiende desde las 09h00 a 18h00,
                  ininterrumpidamente.
                </Text>
                <Text>- Sàbados desde las 07h30 a 12h30.</Text>
                <Text>
                  PROGRAMA TU CITA AL : 1800 -82 72 82 / Whastapp: 099 9667777
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>RECIBÍ EL VEHICULO A SATISFACCIÓN</Text>
                <Text>NOMBRE:__________________________</Text>
                <Text>C.I Ó RUC:_________________________</Text>
              </View>
              <View style={styles.tableCell}>
                <Text> </Text>
                <Text> </Text>
                <Text>FIRMA:___________________________</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Fecha:__________________</Text>
                <Text> </Text>
                <Text>________________________</Text>
                <Text>FIRMA DE RECEPCIONISTA:</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Estilos CSS para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#bfbfbf",
    marginBottom:2,
  },
  tableCell: {
    flex: 1,
    padding: 1,
    fontSize: 6,
    marginBottom:2, 
  },
  tableCell2: {
    flex: 1,
    padding: 1,
    fontSize: 6,
    marginBottom:1, 
    borderRight: 1,
  },
  tableCell3: {
    flex: 1,
    padding: 1,
    fontSize: 6,
    marginBottom:1, 
    border:1,
    fontSize:8,
  },
  tableCellAddress: {
    flex: 1,
    padding: 5,
    fontSize: "6px",
  },
  imageCell: {
    textAlign: "center",
    padding: 0,
    width: 10,
  },
  image: {
    width: 50, // Ancho de la imagen
    height: 50, // Alto de la imagen
  },
  headerCell: {
    textAlign: "center",
  },
  table1: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0', // Color de fondo para el encabezado
  },
  row: {
    flexDirection: 'row',
  },
  headerCell1: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  cellText: {
    fontSize: 6,
  },
  TextSpace: {
    marginBottom: 2,
  },
  TextSpace1: {
    marginBottom: 3,
  },
  TextSpace2: {
    padding: 4,
    marginBottom: 3,
    fontWeight: 'bolder',
  },
  TextSpace4: {
    marginBottom: 3,
    textAlign: 'center',
    
  },
});

// Componente principal que utiliza react-to-pdf para generar el PDF
const PDFGenerator = () => {
  return (
    <div>
      <PDFDownloadLink document={<Template />} fileName="archivo.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Generando PDF..." : "Descargar PDF"
        }
      </PDFDownloadLink>
      <PDFViewer width="1000" height="600">
        <Template />
      </PDFViewer>
    </div>
  );
};

export default PDFGenerator;
