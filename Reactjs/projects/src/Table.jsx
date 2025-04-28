import React from 'react'
import styles from './Table.module.css'
const Table = () => {
  return (
    <>
    <section className={styles.parent}>
        <h2>Employees Deatils</h2>
        <table rowspan>
            <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            </tr>

            <tr>
            <td>101</td>
            <td>Chetna</td>
            <td>Software Engineer</td>
            <td>chetna.dev@email.com</td>
            </tr>

            <tr>
            <td>102</td>
            <td>Sayli</td>
            <td>Software Engineer</td>
            <td>sayli.dev@email.com</td>
            </tr>

            <tr>
            <td>103</td>
            <td>Tejashri</td>
            <td>Software Engineer</td>
            <td>teja.dev@email.com</td>
            </tr>

            <tr>
            <td>104</td>
            <td>Sakshi</td>
            <td>Software Engineer</td>
            <td>sakshi.dev@email.com</td>
            </tr>

        </table>
    </section>
      
    </>
  )
}

export default Table
