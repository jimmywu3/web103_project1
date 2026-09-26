import { pool } from "./database.js"
import "./dotenv.js"
import mobData from "../data/mobs.js"

const createMobTable = async () => {
    try {
        const createTableQuery = `
            DROP TABLE IF EXISTS mobs;

            CREATE TABLE IF NOT EXISTS mobs (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                health INT NOT NULL,
                type VARCHAR(255) NOT NULL,
                color VARCHAR(255) NOT NULL,
                spawn VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                img_url TEXT NOT NULL
            )
        `   
        const res = await pool.query(createTableQuery)
        console.log('🎉 mobs table created successfully')
    } catch (error) {
        console.error('⚠️ error creating mobs table', err)
    }
}

const seedMobTable = async () => {
    await createMobTable()

    mobData.forEach(mob => {
        const insertQuery = {
            text: 'INSERT INTO mobs (name, health, type, color, spawn, description, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            mob.name,
            mob.health,
            mob.type,
            mob.color,
            mob.spawn,
            mob.description,
            mob.img_url
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting mob', err)
                return
            }

            console.log(`✅ ${mob.name} added successfully`)
        })
    })
}

seedMobTable()