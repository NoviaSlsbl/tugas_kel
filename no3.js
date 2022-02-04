function array(value){
    const result = value.map(el => {
        const newArr =""
        return el += newArr
    })
    const split = result[3].split(',')

    result.pop ()
    console.log(result, split);
    console.log(result, split.join(' '))
}
array(['hallo', 'nama', 'saya',['novia', 'salsabila',['kelas',['11','1']]]])