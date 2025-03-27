/**convenções para ultilizar generic
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T extends number | string = string>() {//Aqui ele aceitaria tanto number quanto string, mas se eu declarar com generic, assim ele da erro na linha 26 pois ele nao aceita number
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return {get, set};
}

let newState = useState<string>();// a partir que eu declaro o tipo como string eu tenho que respeitar esse tipo, se eu declarar com generic, assim ele da erro na linha 26 pois ele nao aceita number
newState.get();
newState.set("Rodrigo");
// newState.set(123);
newState.set("Amanda");