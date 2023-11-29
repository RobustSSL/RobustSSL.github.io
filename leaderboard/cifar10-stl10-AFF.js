
    // Sample data (you can replace this with your own data)
    const scheduleData_cifar10_stl10_AFF = [
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '', ra1: 35.66, ca1: 0, sa1: 63.74, ra2: 35.88, ca2:0 , sa2: 64.25},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '', ra1: 35.25, ca1: 0, sa1: 63.53, ra2: 35.51, ca2: 0, sa2: 64.16},
        { paper: 'When Does Contrastive Learning Preserve Adversarial Robustness from Pretraining to Finetuning?', link: 'https://arxiv.org/abs/2111.01124', venue: 'NeurIPS 2021', 
        comment: 'Using ImageNet-1K pre-trained models', ra1: 33.84, ca1: 0, sa1: 68.14, ra2: 36.08, ca2: 0, sa2: 64.24},
        { paper: 'Adversarial Contrastive Learning via Asymmetric InfoNCE', link: 'https://arxiv.org/abs/2207.08374#:~:text=Contrastive%20learning%20(CL)%20has%20recently,other%2C%20yields%20better%20adversarial%20robustness', venue: 'ECCV 2022', 
        comment: 'Using ImageNet-1K pre-trained models', ra1: 33.50, ca1: 0, sa1: 67.99, ra2: 34.76, ca2: 0, sa2: 64.36},
        { paper: 'Robust Pre-Training by Adversarial Contrastive Learning', link: 'https://proceedings.neurips.cc/paper/2020/hash/ba7e36c43aff315c00ec2b8625e3b719-Abstract.html', venue: 'NeurIPS 2020', 
        comment: '', ra1: 32.66, ca1: 0, sa1: 61.41, ra2: 34.00, ca2: 0, sa2: 61.61},
        { paper: 'Efficient Adversarial Contrastive Learning via Robustness-Aware Coreset Selection', link: 'https://arxiv.org/pdf/2302.03857.pdf', venue: 'NeurIPS 2023', 
        comment: '', ra1: 32.10, ca1: 0, sa1: 63.48, ra2: 32.57, ca2: 72.65, sa2: 60.22},
        { paper: 'Decoupled Adversarial Contrastive Learning for Self-supervised Adversarial Robustness', link: 'https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136900716.pdf', venue: 'ECCV 2022', 
        comment: '', ra1: 24.66, ca1: 0, sa1: 48.01, ra2: 30.34, ca2: 0, sa2: 51.09},
    ];			

    // Get the container element by its id
    const scheduleContainer_cifar10_stl10_AFF = document.getElementById('scheduleContainer_cifar10_stl10_AFF');

    // Loop through the data and create schedule items
    scheduleData_cifar10_stl10_AFF.forEach((item, index) => {
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
        scheduleContainer_cifar10_stl10_AFF.appendChild(scheduleItem);
    });
