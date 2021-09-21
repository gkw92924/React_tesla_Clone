import React from "react";
import "./style.css";

export default function SignInFrom(){
  return(
    <form>
      <table>
        <tr>
          <td>Firstname:</td>
          <td><input type='text' required ></input></td>
        </tr>
        <tr>
          <td>Lastname:</td>
          <td><input type="text" required ></input></td>
        </tr>
      </table>
    </form>
  );
}