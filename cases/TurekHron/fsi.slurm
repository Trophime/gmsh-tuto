#!/bin/bash
#SBATCH -J Turek        # name of the job
#SBATCH -N 4                    # number of nodes
#SBATCH --ntasks-per-node=8   # number of MPI tasks per node
#SBATCH --threads-per-core=1    # no hyperthreading
#SBATCH -t 48:00:00             # walltime
#SBATCH -p public               # partition
##SBATCH --exclusive            # exclusive mode
##SBATCH --mail-type=BEGIN
##SBATCH --mail-user=user@unistra.fr

#SBATCH -o log/%j-Turek-o.log # standard output
#SBATCH -e log/%j-Turek-e.log # standard error


export OMP_NUM_THREADS=1
module load hpcx

# ts.cfg
mpiexec -bind-to core feelpp_toolbox_fsi_2d --config-file fsi.cfg

