
    // Sample data (you can replace this with your own data)
    const scheduleData_cifar100_stl10_AFF = [
        { paper: 'Enhancing Adversarial Contrastive Learning via Adversarial Invariant Regularization', link: 'https://arxiv.org/abs/2305.00374', venue: 'NeurIPS 2023', 
        comment: '', ra1: 31.42, ca1: 0, sa1: 61.19, ra2:27.71, ca2:0 , sa2:51.34},
        { paper: 'Rethinking the Effect of Data Augmentation in Adversarial Contrastive Learning ', link: 'https://openreview.net/forum?id=0qmwFNJyxCL&noteId=ZXhFXELOcQ', venue: 'ICLR 2023', 
        comment: '', ra1: 31.17, ca1: 0, sa1: 58.85, ra2:26.24, ca2: 0, sa2:50.34},
        { paper: 'Adversarial Contrastive Learning via Asymmetric InfoNCE', link: 'https://arxiv.org/abs/2207.08374#:~:text=Contrastive%20learning%20(CL)%20has%20recently,other%2C%20yields%20better%20adversarial%20robustness', venue: 'ECCV 2022', 
        comment: '', ra1: 31.10, ca1: 0, sa1: 64.88, ra2:21.31, ca2: 0, sa2:52.28},
        { paper: 'When Does Contrastive Learning Preserve Adversarial Robustness from Pretraining to Finetuning?', link: 'https://arxiv.org/abs/2111.01124', venue: 'NeurIPS 2021', 
        comment: '', ra1: 30.50, ca1: 0, sa1: 61.24, ra2:20.71, ca2: 0, sa2:50.69},
        { paper: 'Robust Pre-Training by Adversarial Contrastive Learning', link: 'https://proceedings.neurips.cc/paper/2020/hash/ba7e36c43aff315c00ec2b8625e3b719-Abstract.html', venue: 'NeurIPS 2020', 
        comment: '', ra1: 28.76, ca1: 0, sa1: 56.23, ra2:25.34, ca2: 0, sa2:50.34},
    ];			

    // Get the container element by its id
    const scheduleContainer_cifar100_stl10_AFF = document.getElementById('scheduleContainer_cifar100_stl10_AFF');

    // Loop through the data and create schedule items
    scheduleData_cifar100_stl10_AFF.forEach((item, index) => {
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
            col2.innerHTML = `<h5><center><a href=${item.link}>${item.paper}</a> <br> <small> ${item.comment}</small> <br> <small><i>${item.venue}</i></small> </center></h5>`;
        }else {
            col2.innerHTML = `<h5><center><a href=${item.link}>${item.paper}</a> <br> <small><i>${item.venue}</i></small> </center></h5>`;
        }
        
        const col9 = document.createElement('div');
        col9.classList.add('col-md-1');
        var m = (item.ra1 + item.sa1)/2
        col9.style.width = '6%'
        col9.innerHTML = `<h5><center><b>${m.toFixed(2)}</b></center></h5>`;

        const col3 = document.createElement('div');
        col3.classList.add('col-md-1');
        col3.style.width = '6%'
        col3.innerHTML = `<h5><center>${item.ra1.toFixed(2)}</center></h5>`;

        // const col4 = document.createElement('div');
        // col4.classList.add('col-md-1');
        // col4.style.width = '6%'
        // col4.innerHTML = `<h5><center>${item.ca1.toFixed(2)}</center></h5>`;

        const col5 = document.createElement('div');
        col5.classList.add('col-md-1');
        col5.style.width = '6%'
        col5.innerHTML = `<h5><center>${item.sa1.toFixed(2)}</center></h5>`;

        const col10 = document.createElement('div');
        col10.classList.add('col-md-1');
        col10.style.width = '6%'
        var m = (item.ra2 + item.sa2)/2
        col10.innerHTML = `<h5><center><b>${m.toFixed(2)}</b></center></h5>`;

        const col6 = document.createElement('div');
        col6.classList.add('col-md-1');
        col6.style.width = '6%'
        col6.innerHTML = `<h5><center>${item.ra2.toFixed(2)}</center></h5>`;

        // const col7 = document.createElement('div');
        // col7.classList.add('col-md-1');
        // col7.style.width = '6%'
        // col7.innerHTML = `<h5><center>${item.ca2.toFixed(2)}</center></h5>`;

        const col8 = document.createElement('div');
        col8.classList.add('col-md-1');
        col8.style.width = '6%'
        col8.innerHTML = `<h5><center>${item.sa2.toFixed(2)}</center></h5>`;

        // Append the columns to the schedule item
        scheduleItem.appendChild(col1);
        scheduleItem.appendChild(col2);
        scheduleItem.appendChild(col9);
        scheduleItem.appendChild(col3);
        // scheduleItem.appendChild(col4);
        scheduleItem.appendChild(col5);
        scheduleItem.appendChild(col10);
        scheduleItem.appendChild(col6);
        // scheduleItem.appendChild(col7);
        scheduleItem.appendChild(col8);

        // Append the schedule item to the container
        scheduleContainer_cifar100_stl10_AFF.appendChild(scheduleItem);
    });