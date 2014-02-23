<Query Kind="Statements">
  <Connection>
    <ID>db123753-cc28-436c-85f0-c81594a19c92</ID>
    <Persist>true</Persist>
    <Driver>EntityFramework</Driver>
    <Server>sr2avc5eyc.database.windows.net</Server>
    <CustomAssemblyPath>C:\dev\optirtcazure\OptiRTC.SqlAccess\bin\Debug\OptiRTC.SqlAccess.dll</CustomAssemblyPath>
    <CustomTypeName>OptiRTC.SqlAccess.OptiEntities</CustomTypeName>
    <CustomMetadataPath>res://OptiRTC.SqlAccess/OptiEntities.csdl|res://OptiRTC.SqlAccess/OptiEntities.ssdl|res://OptiRTC.SqlAccess/OptiEntities.msl</CustomMetadataPath>
    <SqlSecurity>true</SqlSecurity>
    <Database>OptiRTC12</Database>
    <UserName>adminbedig</UserName>
    <Password>AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAJDap5OgZOEis/8wDAsR8kAAAAAACAAAAAAADZgAAwAAAABAAAADbOJ2sW7MaYwqOCvMtNDqnAAAAAASAAACgAAAAEAAAADkBXUp2tE2Mn8VLlyWOnpMQAAAAwSbV06IZuv5WQ46dKjzwrxQAAACIiPNQ9XOTkO05p67VxndWY4RP4g==</Password>
    <DbVersion>Azure</DbVersion>
    <DisplayName>OptiRTC12-production</DisplayName>
  </Connection>
  <Namespace>System.IO.Compression</Namespace>
  <Namespace>System.Threading.Tasks</Namespace>
</Query>


// B.
// Read file into byte array buffer.
byte[] b;
using (FileStream f = new FileStream("C:\\dev\\quito\\geojson\\IND_VULNER_NO_CC.json", FileMode.Open))
{
    b = new byte[f.Length];
    f.Read(b, 0, (int)f.Length);
}

// C.
// Use GZipStream to write compressed bytes to target file.
using (FileStream f2 = new FileStream("C:\\dev\\quito\\geojson-gzip\\IND_VULNER_NO_CC.json", FileMode.Create))
using (GZipStream gz = new GZipStream(f2, CompressionMode.Compress, false))
{
    gz.Write(b, 0, b.Length);
}