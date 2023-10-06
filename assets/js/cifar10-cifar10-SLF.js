
    // Sample data (you can replace this with your own data)
    const scheduleData = [
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '*Using post-processing', ra1: 46.99, ca1: 72.11, sa1: 81.80, ra2: 45.40, ca2: 74.55, sa2: 83.52},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '*Using post-processing', ra1: 46.54, ca1: 71.96, sa1: 79.82, ra2: 45.07, ca2: 73.56, sa2: 81.75},
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '', ra1: 45.27, ca1: 70.51, sa1: 78.08, ra2: 44.80, ca2: 70.21, sa2: 78.52},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '', ra1: 45.09, ca1: 68.67, sa1: 75.41, ra2: 44.65, ca2:	70.96, sa2:77.83},
        { paper: 'Decoupled Adversarial Contrastive Learning for Self-supervised Adversarial Robustness', link: 'https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136900716.pdf', venue: 'ECCV 2022', 
        comment: '', ra1: 43.27, ca1: 73.06, sa1: 79.94, ra2: 43.85	, ca2: 72.74, sa2: 80.80},
        { paper: 'When Does Contrastive Learning Preserve Adversarial Robustness from Pretraining to Finetuning?', link: 'https://arxiv.org/abs/2111.01124', venue: 'NeurIPS 2021', 
        comment: '', ra1: 43.18, ca1: 73.14, sa1: 82.36, ra2: 42.79	, ca2: 73.71, sa2: 	83.04},
        { paper: 'Adversarial Contrastive Learning via Asymmetric InfoNCE', link: 'https://arxiv.org/abs/2207.08374#:~:text=Contrastive%20learning%20(CL)%20has%20recently,other%2C%20yields%20better%20adversarial%20robustness', venue: 'ECCV 2022', 
        comment: '', ra1: 42.72, ca1: 74.09, sa1: 83.70, ra2: 42.46	, ca2: 74.46, sa2: 	84.17},
        { paper: 'Robust Pre-Training by Adversarial Contrastive Learning', link: 'https://proceedings.neurips.cc/paper/2020/hash/ba7e36c43aff315c00ec2b8625e3b719-Abstract.html', venue: 'NeurIPS 2020', 
        comment: '', ra1: 39.17, ca1: 70.72, sa1: 78.22, ra2: 37.92	, ca2: 72.65, sa2: 	80.65},
       
    ];
    

    // Get the container element by its id
    const scheduleContainer = document.getElementById('scheduleContainer');

    // Loop through the data and create schedule items
    scheduleData.forEach((item, index) => {
        // Create a new schedule item container
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('row', 'schedule-item');
        if (index % 2 == 0) {
            scheduleItem.style.backgroundColor = "#e5e5e5"
        }

        // Create the columns
        const col1 = document.createElement('div');
        col1.classList.add('col-md-1');
        col1.style.width = '5%'
        col1.innerHTML = `<h5><center>${index+1}</center></h5>`;

        const col2 = document.createElement('div');
        col2.classList.add('col-md');
        if (!!item.comment) {
            col2.innerHTML = `<h5><center><a href=${item.link}>${item.paper}</a> <br> <small> ${item.comment}</small> <br> (${item.venue})  </center></h5>`;
        }else {
            col2.innerHTML = `<h5><center><a href=${item.link}>${item.paper}</a> <br> (${item.venue}) </center></h5>`;
        }
        
        const col9 = document.createElement('div');
        col9.classList.add('col-md-1');
        var m = (item.ra1 + item.ca1 + item.sa1)/3
        col9.style.width = '6%'
        col9.innerHTML = `<h5><center><b>${m.toFixed(2)}</b></center></h5>`;

        const col3 = document.createElement('div');
        col3.classList.add('col-md-1');
        col3.style.width = '6%'
        col3.innerHTML = `<h5><center>${item.ra1.toFixed(2)}</center></h5>`;

        const col4 = document.createElement('div');
        col4.classList.add('col-md-1');
        col4.style.width = '6%'
        col4.innerHTML = `<h5><center>${item.ca1.toFixed(2)}</center></h5>`;

        const col5 = document.createElement('div');
        col5.classList.add('col-md-1');
        col5.style.width = '6%'
        col5.innerHTML = `<h5><center>${item.sa1.toFixed(2)}</center></h5>`;

        const col10 = document.createElement('div');
        col10.classList.add('col-md-1');
        col10.style.width = '6%'
        var m = (item.ra2 + item.ca2 + item.sa2)/3
        col10.innerHTML = `<h5><center><b>${m.toFixed(2)}</b></center></h5>`;

        const col6 = document.createElement('div');
        col6.classList.add('col-md-1');
        col6.style.width = '6%'
        col6.innerHTML = `<h5><center>${item.ra2.toFixed(2)}</center></h5>`;

        const col7 = document.createElement('div');
        col7.classList.add('col-md-1');
        col7.style.width = '6%'
        col7.innerHTML = `<h5><center>${item.ca2.toFixed(2)}</center></h5>`;

        const col8 = document.createElement('div');
        col8.classList.add('col-md-1');
        col8.style.width = '6%'
        col8.innerHTML = `<h5><center>${item.sa2.toFixed(2)}</center></h5>`;

        // Append the columns to the schedule item
        scheduleItem.appendChild(col1);
        scheduleItem.appendChild(col2);
        scheduleItem.appendChild(col9);
        scheduleItem.appendChild(col3);
        scheduleItem.appendChild(col4);
        scheduleItem.appendChild(col5);
        scheduleItem.appendChild(col10);
        scheduleItem.appendChild(col6);
        scheduleItem.appendChild(col7);
        scheduleItem.appendChild(col8);

        // Append the schedule item to the container
        scheduleContainer.appendChild(scheduleItem);
    });
