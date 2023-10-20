
    // Sample data (you can replace this with your own data)
    const scheduleData_ALF = [
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: 'Using post-processing', ra1: 48.23, ca1: 71.74, sa1: 79.56, ra2: 47.50, ca2:	73.88, sa2: 82.42},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: 'Using post-processing', ra1: 47.98, ca1: 70.89, sa1: 78.81, ra2: 47.38, ca2: 73.57, sa2:	81.42},
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '', ra1: 46.14, ca1: 69.97, sa1: 77.42, ra2: 46.12, ca2: 70.93, sa2: 79.11},
        { paper: 'Efficient Adversarial Contrastive Learning via Robustness-Aware Coreset Selection', link: 'https://arxiv.org/pdf/2302.03857.pdf', venue: 'NeurIPS 2023', 
        comment: '', ra1: 45.75, ca1: 67.84, sa1: 74.95, ra2: 37.92	, ca2: 72.65, sa2: 	80.65},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '', ra1: 45.67, ca1: 66.69, sa1: 72.97, ra2: 45.64, ca2: 70.99, sa2: 78.10},
        { paper: 'When Does Contrastive Learning Preserve Adversarial Robustness from Pretraining to Finetuning?', link: 'https://arxiv.org/abs/2111.01124', venue: 'NeurIPS 2021', 
        comment: 'Using ImageNet-1K pre-trained models', ra1: 44.05, ca1: 71.50, sa1: 80.04, ra2: 43.98, ca2: 73.14, sa2: 80.31},
        { paper: 'Adversarial Contrastive Learning via Asymmetric InfoNCE', link: 'https://arxiv.org/abs/2207.08374#:~:text=Contrastive%20learning%20(CL)%20has%20recently,other%2C%20yields%20better%20adversarial%20robustness', venue: 'ECCV 2022', 
        comment: 'Using ImageNet-1K pre-trained models', ra1: 43.28, ca1: 71.61, sa1: 80.30, ra2: 44.10, ca2: 72.64, sa2: 81.29},
        { paper: 'Decoupled Adversarial Contrastive Learning for Self-supervised Adversarial Robustness', link: 'https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136900716.pdf', venue: 'ECCV 2022', 
        comment: '', ra1: 41.99, ca1: 71.66, sa1: 77.71, ra2:43.31, ca2: 72.15, sa2: 81.07},
        { paper: 'Robust Pre-Training by Adversarial Contrastive Learning', link: 'https://proceedings.neurips.cc/paper/2020/hash/ba7e36c43aff315c00ec2b8625e3b719-Abstract.html', venue: 'NeurIPS 2020', 
        comment: '', ra1: 40.60, ca1: 68.56, sa1: 75.53, ra2: 41.46, ca2: 	69.03, sa2: 76.37},
        
    ];

     // Get the container element by its id
     const scheduleContainer_ALF = document.getElementById('scheduleContainer_ALF');

     // Loop through the data and create schedule items
     scheduleData_ALF.forEach((item, index) => {
         // Create a new schedule item container
         const scheduleItem = document.createElement('div');
         scheduleItem.classList.add('row', 'schedule-item');
         if (index % 2 == 0) {
             scheduleItem.style.backgroundColor = "#e5e5e5"
         }
 
         // Create the columns
         const col1 = document.createElement('div');
         col1.classList.add('col-1');
         col1.style.width = '5%'
         col1.innerHTML = `<h5><center>${index+1}</center></h5>`;
 
         const col2 = document.createElement('div');
         col2.classList.add('col');
         if (!!item.comment) {
             col2.innerHTML = `<h5><center><a style="color: #0E1B8E" href=${item.link}>${item.paper}</a> <br> <small><sup>*</sup>${item.comment}</small>  </center></h5>`;
         }else {
             col2.innerHTML = `<h5><center><a style="color: #0E1B8E" href=${item.link}>${item.paper}</a> </center></h5>`;
         }
         
         const col11 = document.createElement('div');
         col11.classList.add('col-1');
         col11.style.width = '10%'
         col11.innerHTML = `<h5><center><i>${item.venue}</i></center></h5>`;
 
         // const col9 = document.createElement('div');
         // col9.classList.add('col-1');
         // var m = (item.ra1 + item.ca1 + item.sa1)/3
         // col9.style.width = '6%'
         // col9.innerHTML = `<h5><center><b>${m.toFixed(2)}</b></center></h5>`;
 
         const col3 = document.createElement('div');
         col3.classList.add('col-1');
         col3.style.width = '11%'
         col3.innerHTML = `<h5><center><b>${item.ra1.toFixed(2)}</b></center></h5>`;
 
         const col4 = document.createElement('div');
         col4.classList.add('col-1');
         col4.style.width = '5%'
         col4.innerHTML = `<h5><center>${item.ca1.toFixed(2)}</center></h5>`;
 
         const col5 = document.createElement('div');
         col5.classList.add('col-1');
         col5.style.width = '11%'
         col5.innerHTML = `<h5><center>${item.sa1.toFixed(2)}</center></h5>`;
 
         // const col10 = document.createElement('div');
         // col10.classList.add('col-1');
         // col10.style.width = '6%'
         // var m = (item.ra2 + item.ca2 + item.sa2)/3
         // col10.innerHTML = `<h5><center><b>${m.toFixed(2)}</b></center></h5>`;
 
         // const col6 = document.createElement('div');
         // col6.classList.add('col-1');
         // col6.style.width = '6%'
         // col6.innerHTML = `<h5><center>${item.ra2.toFixed(2)}</center></h5>`;
 
         // const col7 = document.createElement('div');
         // col7.classList.add('col-1');
         // col7.style.width = '6%'
         // col7.innerHTML = `<h5><center>${item.ca2.toFixed(2)}</center></h5>`;
 
         // const col8 = document.createElement('div');
         // col8.classList.add('col-1');
         // col8.style.width = '6%'
         // col8.innerHTML = `<h5><center>${item.sa2.toFixed(2)}</center></h5>`;
 
         // Append the columns to the schedule item
         scheduleItem.appendChild(col1);
         scheduleItem.appendChild(col2);
         scheduleItem.appendChild(col11);
        //  scheduleItem.appendChild(col9);
         scheduleItem.appendChild(col3);
         scheduleItem.appendChild(col4);
         scheduleItem.appendChild(col5);
         // scheduleItem.appendChild(col10);
         // scheduleItem.appendChild(col6);
         // scheduleItem.appendChild(col7);
         // scheduleItem.appendChild(col8);
         scheduleItem.appendChild(document.createElement('br'));
 
         // Append the schedule item to the container
         scheduleContainer_ALF.appendChild(scheduleItem);
     });
 