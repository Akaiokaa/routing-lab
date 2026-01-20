import { json } from "express";

//place controller functions here...
const campuses = [
    { id: 1, code: "AUB", name: "Auburn Campus", city: "Auburn", open: true, programs: ["CS", "IT", "Nursing"] },
    { id: 2, code: "KCC", name: "Kent Campus", city: "Kent", open: true, programs: ["CS", "Business"] },
    { id: 3, code: "SEA", name: "Seattle Center", city: "Seattle", open: false, programs: ["Continuing Ed"] },
    { id: 4, code: "TAC", name: "Tacoma Site", city: "Tacoma", open: true, programs: ["Trades", "IT"] },
    { id: 5, code: "REN", name: "Renton Annex", city: "Renton", open: false, programs: ["ESL", "GED"] }
];

export const home = (req, res) => {
    res.json({ campuses });
        // title: "MVC Starter App",
        // subtitle: "Express + EJS + Static Assets"
};

export const info = (req, res) => {
    res.status(200).json({
        message: "Server routes",
        routes: ["Get /", "Get /about|info", "Get /:id", "Get /search"]
    })
}

export const campusByID = (req, res) => {
    
    // const id = req.params.id;
    const { id } = req.params;
    console.log(id)
    
    // const campus = campues.find(el => el.id === id);

    const campus = campuses.find(el => {
        console.log(`compare: ${el.id} to ${id}`)
        console.log(typeof el.id);
        console.log(typeof id);

        return el.id === Number(id);
    });

    if (campus){
        res.status(200).json(campus)
    } else {
        res.status(404).json({ 
            message: "Campus not found"
        })
    }
  
}

export const search = (req, res) => {
    // const city = req.query.city;
    // const open = req.query.open;
    // const program = req.query.program;
    
    const {city, open, programs } = req.query;

    const result = campuses.filter(el => el.programs.includes(programs));

    res.status(200).json(results);
}