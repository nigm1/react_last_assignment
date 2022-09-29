export default function changelang(lang_data){
    return{
        type:'SET_Language',  //نوع التغيير
        payload:lang_data   //التغغير نفسه
    }
}

export function add_to_favourite(fav_data){
    return{
        type:'SET_Fav', 
        payload:fav_data   
    }
}