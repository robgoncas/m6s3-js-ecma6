const autoDeportivo = {
    marca: 'audi',
    modelo: 'r8',
    puertas: '3',
    tipoTransmision: 'mecanico',
    cantidadCambios: '6',
    velocidadMaximaKMH: 350,
    asientos: '2',
    tipo: 'deportivo'
};

const autoFamiliar = {
    marca: 'ford',
    modelo: 'explorer',
    puertas: '5',
    tipoTransmision: 'automatico',
    cantidadCambios: '5',
    velocidadMaximaKMH: 200,
    asientos: '7',
    tipo: 'familiar'
};

let autoActual;

const describeAuto = (auto) => {

    const { marca, modelo, puertas, tipoTransmision, cantidadCambios, velocidadMaximaKMH, asientos, tipo } = auto;
    autoActual = `${marca} ${modelo}`;

    const descripcion = `El ${marca} ${modelo} es un auto que consta de ${puertas} puertas. 
    Es de Cambio ${tipoTransmision} con ${cantidadCambios} velocidades.
    Alcanza una velocidad de ${velocidadMaximaKMH} KM/H y tiene capacidad para ${asientos} asientos, 
    por lo que lo hace un perfecto auto de tipo ${tipo}`;

    console.log(autoActual);
    console.log(descripcion);
}


const retornaTipo = auto => auto.tipo;

describeAuto(autoFamiliar);

console.log(retornaTipo(autoFamiliar));

const retornaCantidadAsientos = (auto) => {
    auto == undefined ? auto = autoFamiliar : auto = auto;
    console.log(`El auto proporcionado tiene ${auto.asientos}`);
}

retornaCantidadAsientos(autoDeportivo);

const autoDeportivoActualizado = { ...autoDeportivo, velocidadMaximaKMH: 400, asientos: 3 };

const arrayPropiedadesDeportivo = Object.values(autoDeportivoActualizado);

for (const atributoAuto of arrayPropiedadesDeportivo) {
    console.log(atributoAuto)
}
