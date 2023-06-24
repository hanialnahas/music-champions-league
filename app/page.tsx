import Counter from "./counter"
import Card from "./card"

export default function Page() {
  return (
    <div className="flex items-center space-x-52">
      <Card title='Fade To Black' artist='Metallica' album='Ride The Lightning'/>
      <Card title='WaWa' artist='Cher' album='Believe'/>
    </div>
  )
}
