
    // Sample data (you can replace this with your own data)
    const scheduleData_cifar10_stl10_ALF = [
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '', ra1: 31.24, ca1: 0, sa1: 57.14, ra2: 31.65, ca2: 0, sa2: 59.44},
        { paper: 'Efficient Adversarial Contrastive Learning via Robustness-Aware Coreset Selection', link: 'https://arxiv.org/pdf/2302.03857.pdf', venue: 'NeurIPS 2023', 
        comment: '', ra1: 30.36, ca1: 0, sa1: 56.56, ra2: 31.60	,ca2: 72.65, sa2: 60.22},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '', ra1: 29.59, ca1: 0, sa1: 49.55, ra2: 31.34, ca2: 0, sa2: 57.74},
        { paper: 'Robust Pre-Training by Adversarial Contrastive Learning', link: 'https://proceedings.neurips.cc/paper/2020/hash/ba7e36c43aff315c00ec2b8625e3b719-Abstract.html', venue: 'NeurIPS 2020', 
        comment: '', ra1: 28.16, ca1: 0, sa1: 60.86, ra2: 30.05, ca2: 0, sa2: 57.73},
        { paper: 'When Does Contrastive Learning Preserve Adversarial Robustness from Pretraining to Finetuning?', link: 'https://arxiv.org/abs/2111.01124', venue: 'NeurIPS 2021', 
        comment: 'Using ImageNet-1K pre-trained models', ra1: 27.88, ca1: 0, sa1: 58.73, ra2: 29.30, ca2: 0, sa2: 62.71},
        { paper: 'Adversarial Contrastive Learning via Asymmetric InfoNCE', link: 'https://arxiv.org/abs/2207.08374#:~:text=Contrastive%20learning%20(CL)%20has%20recently,other%2C%20yields%20better%20adversarial%20robustness', venue: 'ECCV 2022', 
        comment: 'Using ImageNet-1K pre-trained models', ra1: 27.24, ca1: 0, sa1: 51.81, ra2: 27.89, ca2: 0, sa2: 63.78},
        { paper: 'Decoupled Adversarial Contrastive Learning for Self-supervised Adversarial Robustness', link: 'https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136900716.pdf', venue: 'ECCV 2022', 
        comment: '', ra1: 12.70, ca1: 0, sa1: 39.41, ra2: 27.22, ca2: 0, sa2: 59.21},
        
    ];			

    // Get the container element by its id
    const scheduleContainer_cifar10_stl10_ALF = document.getElementById('scheduleContainer_cifar10_stl10_ALF');

    // Loop through the data and create schedule items
    scheduleData_cifar10_stl10_ALF.forEach((item, index) => {
        // Create a new schedule item container
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('row', 'schedule-item');
        if (index % 2 == 0) {
            scheduleItem.style.backgroundColor = "#e5e5e5"
        }

        // Create the columns
        const col1 = document.createElement('div');
        col1.classList.add('col-1');
        col1.style.width = '3%'
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
        col11.style.width = '9%'
        col11.innerHTML = `<h5><center><i>${item.venue}</i></center></h5>`;

        const col3 = document.createElement('div');
        col3.classList.add('col-1');
        col3.style.width = '9%'
        col3.innerHTML = `<h5><center><b>${item.ra1.toFixed(2)}</b></center></h5>`;

        const col5 = document.createElement('div');
        col5.classList.add('col-1');
        col5.style.width = '10%'
        col5.innerHTML = `<h5><center>${item.sa1.toFixed(2)}</center></h5>`;

        const col6 = document.createElement('div');
        col6.classList.add('col-1');
        col6.style.width = '9%'
        col6.innerHTML = `<h5><center><b>${item.ra2.toFixed(2)}</b></center></h5>`;

        const col8 = document.createElement('div');
        col8.classList.add('col-1');
        col8.style.width = '9%'
        col8.innerHTML = `<h5><center>${item.sa2.toFixed(2)}</center></h5>`;

        // Append the columns to the schedule item
        scheduleItem.appendChild(col1);
        scheduleItem.appendChild(col2);
        scheduleItem.appendChild(col11);
        scheduleItem.appendChild(col3);
        scheduleItem.appendChild(col5);
        scheduleItem.appendChild(col6);
        scheduleItem.appendChild(col8);

        // Append the schedule item to the container
        scheduleContainer_cifar10_stl10_ALF.appendChild(scheduleItem);
    });
