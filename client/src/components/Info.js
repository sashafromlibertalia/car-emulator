const Info = () => {
    return (
       <>
           <div className="col" style={{marginTop: 5 + 'em'}}>
               <i className="bi bi-info-circle-fill" data-toggle="modal" data-target="#popup"></i>
           </div>
           <div className="modal fade" id="popup" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered">
                   <div className="modal-content">
                       <div className="modal-header">
                           <h4 className="modal-title" id="ModalLabel">Основная информация</h4>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                           </button>
                       </div>
                       <div className="modal-body">
                           <div className="container">
                               <div className="row">
                                   <div className="col-6">Мощность, л.с.</div>
                                   <div className="col">320</div>
                               </div>
                               <hr className="my-6"/>
                               <div className="row">
                                   <div className="col-6">Крутящий момент, Нм</div>
                                   <div className="col">580</div>
                               </div>
                               <hr className="my-6"/>
                               <div className="row">
                                   <div className="col-6">Масса, кг</div>
                                   <div className="col">1460</div>
                               </div>
                               <hr className="my-6"/>
                               <div className="row">
                                   <div className="col-6">Объем двигателя, л</div>
                                   <div className="col">4</div>
                               </div>
                               <hr className="my-6"/>
                           </div>
                           <div className="container mt-2">
                               <p>Взаимодействие с машиной происходит с помощью клавиатуры. Основная клавиша - <code>Alt</code>. Она отвечает за сцепление.<br/>
                                   Выбор передач используется с помощью клавиш <code>1</code> , <code>2</code>,
                                   <code>3</code>, <code>4</code>, <code>5</code>,
                                   <code>6</code>, <code>R</code>, <code>N</code>
                                   <br/>
                                   Газ и тормоз работают по нажатию мышки на соответствующую педаль
                               </p>
                           </div>
                       </div>
                       <div className="modal-footer">
                           <button type="button" className="btn btn-dark" data-dismiss="modal">Закрыть</button>
                       </div>
                   </div>
               </div>
           </div>
       </>
    );
}

export default Info;
