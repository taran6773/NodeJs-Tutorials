const fs=require("fs")

const bioData={
    name: "Taran",
    age: 21,
    company: "Paxcom",
}

// console.log(bioData)

const jsonData =JSON.stringify(bioData)
// console.log(jsonData)

// const parsedData=JSON.parse(jsonData)
// console.log(parsedData)

// fs.writeFile('jsonFile.json', jsonData ,(err)=>{
//     console.log("Done!")
// })

fs.readFile("jsonFile.json", "utf-8", (err, data)=>{
    const orgData = JSON.parse(data)
    console.log(data)
    console.log(orgData)
})