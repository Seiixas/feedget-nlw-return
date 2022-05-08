import { Toggle } from "react-toggle-component";
import { CloseButton } from "../../CloseButton";

export function WidgetSettings() {
  return (
    <>
      <div className="bg-zinc-900 p-4">
        <CloseButton />
        <ul>
          <li className="flex justify-between mb-2 gap-2">
            <label>Modo Escuro</label>
            <Toggle
              leftBackgroundColor="#996DFF"
              rightBackgroundColor="#8257e6"
              borderColor="#fff"
              leftBorderColor="#fff"
              rightBorderColor="#fff"
              leftKnobColor="#fff"
              rightKnobColor="#fff"
              borderWidth="1px"
              name="toggle-1" />
          </li>
          <li className="flex justify-between">
            <label>Daltonismo</label>
            <Toggle
              leftBackgroundColor="#996DFF"
              rightBackgroundColor="#8257e6"
              borderColor="#fff"
              leftBorderColor="#fff"
              rightBorderColor="#fff"
              leftKnobColor="#fff"
              rightKnobColor="#fff"
              borderWidth="1px"
              name="toggle-2" />
          </li>
        </ul>
      </div>
    </>
  )
}