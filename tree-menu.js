const myTree = {
    A: {
        children: ["Prosthesis", "Orthosis"],
    },
    "Prosthesis": {
        children: ["Below Knee", "Above Knee", "Transradial", "Transhumeral"]
    },
    "Below Knee": {
        children: ["Suspension System", "Socket Traits", "Mechanical Feet", "Alignable Componentry"]
    }, 


    //BELOW KNEE -- 

    //Suspension Systems: 
    "Suspension System": {
        children: ["Pin", "Suction", "Vacuum"] //internal
    },
    "Pin": {
        children: ["Lock", "Locking Liner"] //LeafNodes
    },
    "Suction": {
        children: ["Sleeve", "Valve", "Ag"] //LeafNodes
    },
    "Vacuum": {
        children: ["Electric", "Mechanical"] //LeafNodes
    },

    //Socket Traints
    "Socket Traits": {
        children: ["Acrylic", "UltraLight", "Total Contact", "Pelite Inner"] //LeafNodes
    },

    //Mechanical Feet
    "Mechanical Feet": {
        children: ["K1", "K2", "K3/4"] //Internal
    },
    "K1": {
        children: ["SACH", "Single Axis"] //LeafNodes
    },
    "K2": {
        children: ["Torsion Unit", "Flexible Keel", "Multi-axial", "Dorsiflexion hydraulic unit"] //LeafNodes
    },
    "K3/4": {
        children: ["Torsion Unit", "Flexible Keel", "Multi-axial", "Dorsiflexion hydraulic unit", "Flex-Walk"] //LeafNodes
    },
    
    //Alignable Componenty
    "Alignable Componentry": {
        children: ["Is there alignable componentry?"]
    },
    //PROBABLY a better way to do this
    "Is there alignable componentry": {
        children: ["Yes", "No"]
    },
    "Yes": {
        children: ["Is there a torsion unit?"]
    },
    "Is there a torsion unit?" : {
        children: ["Yes", "No"]
    },













    "Orthosis": {
     children: ["ABA", "ABB"]
    }
 }