import { pool } from "../db.js"

export const getAlumnos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM alumno')
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
}

export const getAlumno = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM alumno WHERE id = ?', [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        })

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
    
}

export const createAlumno =  async (req, res) => {
    const {nombre, apellido, asistencia} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO alumno(nombre, apellido, asistencia) VALUES (?, ?, ?)', [nombre, apellido, asistencia])
    res.send({
        id: rows.insertId,
        nombre,
        apellido,
        asistencia,
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
    
}

export const deleteAlumno = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM alumno WHERE id = ?', [req.params.id]) 
    
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Alumno no encontrado'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
    
}

export const updateAlumno = async (req, res) => {
    const {id} = req.params
    const {nombre, apellido, asistencia} = req.body

    try {
        const [result] = await pool.query('UPDATE alumno SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), asistencia = IFNULL(?, asistencia) WHERE id = ?', [nombre, apellido, asistencia, id])

    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Alumno no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM alumno WHERE id = ?', [id])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
}
