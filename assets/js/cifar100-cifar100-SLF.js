
    // Sample data (you can replace this with your own data)
    const scheduleData_cifar100_cifar100_SLF = [
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '*Using post-processing', ra1: 20.61, ca1: 43.47, sa1: 53.93, ra2:20.87, ca2:43.55 , sa2:54.22},
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '', ra1: 20.13, ca1: 41.18, sa1: 46.19, ra2: 20.02, ca2: 41.08, sa2: 46.26},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '*Using post-processing', ra1: 20.07, ca1: 43.46, sa1: 52.16, ra2: 19.97, ca2: 42.69, sa2: 51.23},
        { paper: 'Adversarial Contrastive Learning via Asymmetric InfoNCE', link: 'https://arxiv.org/abs/2207.08374#:~:text=Contrastive%20learning%20(CL)%20has%20recently,other%2C%20yields%20better%20adversarial%20robustness', venue: 'ECCV 2022', 
        comment: '', ra1: 20.41, ca1: 41.43, sa1: 50.06, ra2: 20.53	, ca2: 41.89, sa2: 	50.99},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '', ra1: 19.30, ca1: 38.96, sa1: 45.83, ra2: 19.19, ca2:	40.41, sa2:49.98},
        { paper: 'When Does Contrastive Learning Preserve Adversarial Robustness from Pretraining to Finetuning?', link: 'https://arxiv.org/abs/2111.01124', venue: 'NeurIPS 2021', 
        comment: '', ra1: 19.10, ca1: 36.90, sa1: 44.60, ra2: 19.24	, ca2: 39.94, sa2: 	49.09},
        { paper: 'Robust Pre-Training by Adversarial Contrastive Learning', link: 'https://proceedings.neurips.cc/paper/2020/hash/ba7e36c43aff315c00ec2b8625e3b719-Abstract.html', venue: 'NeurIPS 2020', 
        comment: '', ra1: 17.30, ca1: 38.59, sa1: 45.82, ra2: 17.31	, ca2: 37.40, sa2: 	44.85},
    ];			
    

    // Get the container element by its id
    const scheduleContainer_cifar100_cifar100_SLF = document.getElementById('scheduleContainer_cifar100_cifar100_SLF');

    // Loop through the data and create schedule items
    scheduleData_cifar100_cifar100_SLF.forEach((item, index) => {
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
            col2.innerHTML = `<h5><center><a href=${item.link}>${item.paper}</a> <br> <small> ${item.comment}</small> <br> <small><i>${item.venue}</i></small>  </center></h5>`;
        }else {
            col2.innerHTML = `<h5><center><a href=${item.link}>${item.paper}</a> <br> <small><i>${item.venue}</i></small> </center></h5>`;
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
        scheduleContainer_cifar100_cifar100_SLF.appendChild(scheduleItem);
    });
