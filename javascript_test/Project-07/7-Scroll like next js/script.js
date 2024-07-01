const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML =
    <div class='color'>
        <table>
  <tr>
    <th>key</th>y
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>$(e.key === '' ? 'space' : e.key)</td>
    <td>$(e.keycode)</td>
    <td>$(e.code)</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

        </div>
})