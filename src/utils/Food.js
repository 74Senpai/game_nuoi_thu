
class Food {
    constructor( name, type, energy, happy, heatly, foodFrames = {}, foodState = "default"){
        this.name = name;
        this.type = type;
        this.energy = energy;
        this.happy = happy;
        this.heatly = heatly;
        this.foodFrames = foodFrames
        this.foodState = foodState
    }

    get foodName(){
        return this.name
    }

    get foodType(){
        return this.type
    }
    
    get foodEnergy(){
        return this.energy
    }
    get foodHappy(){
        return this.happy
    }
    get foodHeatly(){
        return this.heatly
    }
    
    get foodFrames(){
        return this.foodFrames
    }

    get foodState(){
        return this.foodState
    }

    set foodFrames( frames ){
        this.foodFrames = frames
    }

    set foodName( name ){
        this.name -= name
    }

    set foodEnergy(energy){
        this.energy = energy
    }

    set foodHappy(happy){
        this.happy = happy
    }

    set foodHeatly(health){
        this.heatly = health
    }

    set foodState(state){
        this.foodState = state
    }

}