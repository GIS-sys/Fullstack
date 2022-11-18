function Home(props) {
  return (
    <table style={{'tableLayout': 'fixed', 'width': '100%', 'height': '100%'}}>
      <tbody>
        <tr>
          <td style={{"width": "30%"}}>
            "Много интересной инфы"
          </td>
          <td colSpan="2" style={{"width": "60%"}}>
            "Данный сайт аааааааааааааааааааааааааааааааааааааааааааааааа"
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{"width": "60%"}}>
            Сделано для МФТИ
          </td>
          <td style={{"width": "30%"}}>
            Егоров Г
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Home;
